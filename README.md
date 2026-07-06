# TTSE Petrified Forest Website

> Public-facing website for TTSE Petrified Forest, built with SvelteKit and USWDS components.

## Tech Stack

- **Framework:** SvelteKit 2.x with Svelte 5.x
- **Language:** TypeScript (strict mode)
- **UI Components:** @gsa-tts/svelte-ui-uswds
- **Development:** Docker + VS Code DevContainers
- **Styling:** USWDS design system

## Getting Started

### Prerequisites

- Docker Desktop installed
- VS Code with Remote-Containers extension

### Development with DevContainer (Recommended)

1. **Open in VS Code:**
   ```bash
   code .
   ```

2. **Reopen in Container:**
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Select "Dev Containers: Reopen in Container"
   - Wait for container to build and dependencies to install

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   - Navigate to `http://localhost:5173`

### Development with Docker Compose

```bash
# Start the development server (uses docker-compose.yml + docker-compose.dev.yml)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up

# Open browser to http://localhost:5173

# The container automatically runs npm install and starts the dev server

# In another terminal, run commands inside the container:
docker compose -f docker-compose.yml -f docker-compose.dev.yml exec app npm run lint
docker compose -f docker-compose.yml -f docker-compose.dev.yml exec app npm run check

# Stop the container
docker compose -f docker-compose.yml -f docker-compose.dev.yml down
```

### Local Development (Without Docker)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Type check with svelte-check |
| `npm run check:watch` | Type check in watch mode |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
TTSE-petrified-forest-website/
├── .devcontainer/          # VS Code DevContainer configuration
├── src/
│   ├── lib/                # Reusable components and utilities
│   ├── routes/             # SvelteKit routes (pages)
│   │   └── +page.svelte    # Homepage
│   └── app.html            # HTML template
├── static/                 # Static assets (images, fonts, etc.)
├── Dockerfile              # Multi-stage Docker image (dev + production)
├── docker-compose.yml      # Base Docker Compose configuration
├── docker-compose.dev.yml  # Development-specific overrides
├── docker-compose.prod.yml # Production-specific overrides
├── svelte.config.js        # SvelteKit configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint configuration
├── .prettierrc             # Prettier configuration
└── AGENTS.md               # AI agent behavioral rules

## Deployment

### cloud.gov Platform (Production)

This project is deployed to cloud.gov Platform with SSR support.

**Live URL:** https://ttse-petrified-forest-website.app.cloud.gov

**Deployment Details:**
- **Platform:** cloud.gov (Cloud Foundry)
- **Organization:** sandbox-gsa
- **Space:** jk-sandbox
- **Memory:** 512M
- **Instances:** 1
- **CI/CD:** GitHub Actions (automatic deployment on merge to `main`)
- **Repository:** https://github.com/GSA-TTS/TTSE-petrified-forest-website

**Deployment Process:**
1. Create feature branch and make changes
2. Push branch and create Pull Request
3. Get PR reviewed and approved (required by branch protection)
4. Merge PR to `main`
5. GitHub Actions automatically deploys to cloud.gov

For complete deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Building for Production

```bash
# Build the application
npm run build

# Start production server locally
npm start

# Preview at http://localhost:8080
```

### Docker Production Build

```bash
# Build and run production (uses docker-compose.yml + docker-compose.prod.yml)
docker compose -f docker-compose.yml -f docker-compose.prod.yml up

# Or build separately:
docker compose -f docker-compose.yml -f docker-compose.prod.yml build
docker compose -f docker-compose.yml -f docker-compose.prod.yml up

# Or using Docker directly:
docker build -t ttse-petrified-forest-website:production --target production .
docker run -p 3000:3000 ttse-petrified-forest-website:production
```

## Federal Compliance

This project follows GSA federal coding standards:

- Section 508 accessibility requirements
- USWDS design system guidelines
- TypeScript strict mode enabled
- No hardcoded secrets or credentials
- Security-first development practices

See [AGENTS.md](./AGENTS.md) for complete behavioral rules and coding standards.

## Contributing

1. All changes must be made through Pull Requests
2. Code must pass all linting and type checking
3. Follow Svelte 5 conventions (runes API)
4. Use USWDS components from `@gsa-tts/svelte-ui-uswds`
5. Include AI co-authorship in commits: `Co-Authored-By: AI Agent <ai-agent@gsa.gov>`

## License

This project is in the public domain within the United States.
