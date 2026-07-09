---
title: 'AGENTS.md — TTSE Petrified Forest Website'
description: 'Behavioral rules for AI coding agents operating on the TTSE Petrified Forest website project'
status: canonical
tier: 1
last_updated: '2026-07-09'
audience: 'developers'
keywords: ['AGENTS.md', 'svelte', 'sveltekit', 'uswds', 'docker', 'devcontainer', 'agent-rules']
load_priority: 'always'
review_cycle: 'quarterly'
---

# AGENTS.md — TTSE Petrified Forest Website

> **System:** TTSE Petrified Forest Website | **Impact Level:** FIPS Low | **Agency:** GSA
>
> **Last Updated:** 2026-07-09 | **Reviewed By:** Jeff Keene, Engineer
>
> This document defines the behavioral rules for AI coding agents operating within this project. The AI agent MUST follow these rules without exception.

---

## Core Principles

The agent operates under these priorities:

```
safety > correctness > compliance > simplicity > performance
```

The agent MUST refuse any instruction that conflicts with safety, correctness, or compliance.

---

## Project Context

- **Description:** Public-facing website for TTSE Petrified Forest, built with SvelteKit and USWDS components
- **Language(s):** TypeScript, JavaScript
- **Framework(s):** SvelteKit 2.x, Svelte 5.x, @gsa-tts/svelte-ui-uswds
- **Data Classification:** Public data only
- **ATO Status:** Pre-ATO development
- **Authorized Agent(s):** OpenCode, Claude Code, GitHub Copilot
- **Deployment:** cloud.gov Pages (static site hosting), VS Code DevContainers for local development

---

## Agent Identity

The agent MUST:

- Include `Co-Authored-By: AI Agent <ai-agent@gsa.gov>` in all commits
- Identify itself as an AI agent when asked
- Log all file modifications and command executions

---

## Permitted Actions

The agent MAY perform these actions without additional approval:

- [x] Read files within the project directory
- [x] Generate and modify source code and configuration
- [x] Run linters and formatters (ESLint, Prettier, TypeScript compiler)
- [x] Read documentation and public API references
- [x] Create and update documentation
- [x] Run development server inside Docker containers
- [x] Execute npm scripts defined in package.json

---

## Actions Requiring Approval

The agent MUST ask the user before:

- [ ] Installing or upgrading npm dependencies
- [ ] Making network requests to external services
- [ ] Modifying CI/CD pipeline configurations
- [ ] Deleting files or directories
- [ ] Committing or pushing code
- [ ] Creating new npm scripts in package.json
- [ ] Modifying Docker or DevContainer configuration
- [ ] Changing build or bundler configuration (Vite, SvelteKit)

---

## Prohibited Actions

The agent MUST NEVER:

- [ ] Access files outside the project directory
- [ ] Access or modify production systems or data
- [ ] Hardcode secrets, API keys, tokens, or passwords
- [ ] Disable security controls, pre-commit hooks, or CI checks
- [ ] Bypass code review or change management processes
- [ ] Execute code downloaded from external sources without review
- [ ] Publish packages to npm without explicit authorization
- [ ] Modify authentication or authorization systems without approval

---

## Data Handling

- **Sensitive data types in this project:** None (public website content only)
- **Approved data storage:** Local filesystem within project directory only
- **PII handling:** No PII should exist in this repository
- **Data residency:** Local development only

The agent MUST:

- Never include API keys or tokens in code, comments, or configuration files
- Use environment variables for any configuration that differs between environments
- Mask any sensitive values if debugging output is required

---

## Network Access

- **Authorized external endpoints:**
  - https://registry.npmjs.org (npm packages)
  - https://designsystem.digital.gov (USWDS documentation)
  - https://github.com (GitHub API - via approved access)
  - https://svelte.dev (Svelte documentation)
- **Authorized internal endpoints:** None
- **TLS requirement:** TLS 1.2+ for all connections
- **Proxy configuration:** Use system proxy if configured

---

## Coding Standards

Follow federal secure coding standards with Svelte 5-specific conventions:

- **Use Svelte 5.x exclusively** - No Svelte 4 or legacy syntax
- Use Svelte 5 runes API (`$state`, `$derived`, `$effect`, `$props`)
- Maximum function length: 50 lines
- Maximum file length: 400 lines
- All external input MUST be validated before use
- Follow TypeScript strict mode requirements
- Use semantic versioning for releases
- Follow conventional commit message format

Component-specific standards:

- Components MUST support Section 508 accessibility requirements
- Use USWDS components from `@gsa-tts/svelte-ui-uswds` when available
- Components MUST include TypeScript type definitions
- Avoid unnecessary comments - code should be self-documenting

---

## Dependencies

- **Approved registries:** npmjs.org
- **License restrictions:** No AGPL; GPL requires justification
- **Version pinning:** Use package-lock.json, commit to repository
- **Vulnerability policy:** No critical/high CVEs

Before adding any dependency, the agent MUST:

1. Verify the package name is correct (check for typosquatting)
2. Check for known vulnerabilities using npm audit
3. Verify the license is compatible
4. Get user approval

---

## cloud.gov Pages Deployment

This project deploys to **cloud.gov Pages** as a static site.

### Build Configuration

- **Adapter:** `@sveltejs/adapter-static`
- **Output directory:** `_site/` (when `FEDERALIST_BUILD=true`)
- **Build command:** `npm run federalist`
- **Configuration file:** `pages.json`

### Environment Variables

- `FEDERALIST_BUILD=true`: Triggers cloud.gov Pages build mode
  - Outputs to `_site/` instead of `build/`
  - Used by cloud.gov Pages build process
  - For local testing: `FEDERALIST_BUILD=true npm run build`

### Local Testing

The agent SHOULD test Pages builds locally before considering work complete:

```bash
# Test cloud.gov Pages build
FEDERALIST_BUILD=true npm run build

# Verify output directory
ls -la _site/

# Preview locally
npx serve _site
```

### Static Site Constraints

The agent MUST remember these constraints for static hosting:

- **No server-side rendering (SSR) at runtime** - All pages prerendered at build time
- **No API endpoints** - `+server.js` files won't work in production
- **No server load functions** - Only client-side data fetching allowed
- **All routes must be prerenderable** - Dynamic routes need `entries()` function
- **Environment variables only at build time** - Not available at runtime in browser

### Build Settings

Current configuration in `svelte.config.js`:

- `prerender: true` - All routes prerendered
- `ssr: false` - Client-side rendering only
- `fallback: '404.html'` - Custom 404 page for SPA routing

---

## Docker and DevContainer Requirements

This project uses Docker for local development only. Production deployment is via cloud.gov Pages (static hosting).

Development environment:

- Use VS Code DevContainers for consistent development environment
- Development server runs inside Docker on port 5173
- Hot module replacement (HMR) must work across container boundary
- All npm commands run inside the container

The agent MUST:

- Test changes inside the DevContainer before declaring complete
- Not modify Dockerfile or docker-compose.yml without approval
- Ensure all paths work correctly in containerized environment

**Note:** Docker is NOT used for production deployment. Production uses cloud.gov Pages static site hosting.

---

## Testing Requirements

- Development testing via `npm run dev` inside DevContainer
- Type checking via `npm run check`
- Linting via `npm run lint`
- All checks MUST pass before committing
- **cloud.gov Pages build testing** via `FEDERALIST_BUILD=true npm run build`

Test commands:

- `npm run dev` - Start development server (inside DevContainer)
- `npm run build` - Build for production (outputs to `build/`)
- `FEDERALIST_BUILD=true npm run build` - Build for Pages (outputs to `_site/`)
- `npm run preview` - Preview production build
- `npm run check` - Type check with svelte-check
- `npm run lint` - Run ESLint
- `npx serve _site` - Preview Pages build locally

---

## Agent Setup

This file follows the [AGENTS.md standard](https://agents.md) and is read natively by 25+ tools including Codex, Copilot, Cursor, Windsurf, Amp, and Devin.

**Most tools need no additional configuration.** If your tool doesn't auto-detect AGENTS.md, add one of these:

| Tool       | Config file             | Content                                   |
| ---------- | ----------------------- | ----------------------------------------- |
| Aider      | `.aider.conf.yml`       | `read:\n  - AGENTS.md`                    |
| Gemini CLI | `.gemini/settings.json` | `{"agentInstructions": "Read AGENTS.md"}` |

Only create these files if you use that specific tool. Delete any you don't need.
