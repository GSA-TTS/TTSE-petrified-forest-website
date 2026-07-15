# Development Dockerfile
FROM node:24-alpine AS development

# Install git and bash for development tools
RUN apk add --no-cache git bash

WORKDIR /app

# Install global npm packages
RUN npm install -g npm@latest

# Create node_modules directory with correct permissions
RUN mkdir -p /app/node_modules && chown -R node:node /app

# Switch to node user
USER node

# Development container stays alive
CMD ["sleep", "infinity"]

# Production Dockerfile for SvelteKit application
# Multi-stage build for optimal image size

# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --only=production=false || npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Production stage
FROM node:24-alpine AS production

WORKDIR /app

# Copy built application and dependencies
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S sveltekit -u 1001

USER sveltekit

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["node", "build"]
