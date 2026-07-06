# cloud.gov Deployment Guide

## Overview

This project is configured to deploy to **cloud.gov Platform** (not cloud.gov Pages) using GitHub Actions for continuous deployment. The SvelteKit SSR application runs as a Node.js application on cloud.gov.

**Repository:** https://github.com/GSA-TTS/TTSE-petrified-forest-website

## Prerequisites

1. **cloud.gov Account** - Access to sandbox-gsa organization
2. **GitHub Repository** - Code hosted on GitHub at GSA-TTS
3. **GitHub Secrets** - Cloud Foundry credentials configured
4. **Space** - jk-sandbox space in sandbox-gsa
5. **Branch Protection** - `main` branch is protected (PRs required for merges)

## Architecture

- **Platform:** cloud.gov Platform (Cloud Foundry)
- **Buildpack:** Node.js buildpack
- **Runtime:** Node.js 20.x
- **Adapter:** @sveltejs/adapter-node (SSR support)
- **Memory:** 512M
- **Instances:** 1 (can be scaled up)
- **Organization:** sandbox-gsa
- **Space:** jk-sandbox
- **App Name:** ttse-petrified-forest-website
- **URL:** https://ttse-petrified-forest-website.app.cloud.gov

## Configuration Files

### `manifest.yml`
Defines the cloud.gov application configuration:
- Application name: `ttse-petrified-forest-website`
- Memory allocation: 512M
- Node.js buildpack
- Production environment variables (NODE_ENV: production)
- Application route (URL): https://ttse-petrified-forest-website.app.cloud.gov
- **Note:** PORT is automatically set by cloud.gov (do not specify)

### `.cfignore`
Excludes unnecessary files from deployment (similar to .gitignore):
- Source files (src/)
- Development dependencies
- Docker files
- Config files not needed in production

### `Procfile`
Defines the process to start the application:
```
web: node build/index.js
```

### `.github/workflows/deploy.yml`
GitHub Actions CI/CD pipeline that:
1. Checks out code
2. Installs dependencies
3. Runs type checking and linting
4. Builds the application
5. Deploys to cloud.gov

**Trigger:** Runs automatically when PRs are merged to `main` branch (protected)

## Service Account Setup

For automated deployments, use a service account instead of personal credentials.

### Create Service Account

```bash
# 1. Login and target your space
cf login -a https://api.fr.cloud.gov --sso
cf target -o sandbox-gsa -s jk-sandbox

# 2. Create service account
cf create-service cloud-gov-service-account space-deployer ttse-petrified-forest-website-deployer

# 3. Create service key
cf create-service-key ttse-petrified-forest-website-deployer deployer-key

# 4. Retrieve credentials
cf service-key ttse-petrified-forest-website-deployer deployer-key
```

This will output JSON with `username` and `password` fields. Use these for GitHub Secrets.

## GitHub Secrets Setup

Before the first deployment, configure these secrets in your GitHub repository:

**Navigate to:**
```
https://github.com/GSA-TTS/TTSE-petrified-forest-website
→ Settings → Secrets and variables → Actions → New repository secret
```

**Add the following 4 secrets:**

| Secret Name | Description | Value |
|------------|-------------|-------|
| `CF_USERNAME` | Service account username | From service-key output |
| `CF_PASSWORD` | Service account password | From service-key output |
| `CF_ORG` | Your cloud.gov organization | `sandbox-gsa` |
| `CF_SPACE` | Your cloud.gov space name | `jk-sandbox` |

### How to Add Secrets:

```bash
# In GitHub UI:
Repository → Settings → Secrets and variables → Actions → New repository secret
```

## Deployment Methods

### Automatic Deployment (Recommended)

**Note:** The `main` branch is protected and requires Pull Requests.

Deployment workflow:
1. Create a feature branch
2. Make changes and commit
3. Push branch and create Pull Request
4. Get PR reviewed and approved
5. Merge PR to `main`
6. GitHub Actions automatically deploys to cloud.gov

```bash
# Example workflow
git checkout -b feat/my-new-feature
git add .
git commit -m "feat: add new feature"
git push origin feat/my-new-feature
# Then create PR on GitHub and merge after approval
```

The GitHub Actions workflow runs on merge to `main` and will:
1. Run type checking
2. Run linting
3. Build the application
4. Deploy to cloud.gov
5. Report status in the Actions tab

### Manual Deployment via GitHub Actions

Trigger deployment manually from GitHub:

1. Go to **Actions** tab: https://github.com/GSA-TTS/TTSE-petrified-forest-website/actions
2. Select **Deploy to cloud.gov** workflow
3. Click **Run workflow**
4. Select `main` branch
5. Click **Run workflow** button

### Local Deployment (Testing)

Deploy directly from your local machine:

```bash
# 1. Install Cloud Foundry CLI
# On macOS:
brew install cloudfoundry/tap/cf-cli@8

# On Linux:
wget -q -O - https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key | sudo apt-key add -
echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list
sudo apt-get update
sudo apt-get install cf8-cli

# 2. Build the application
npm run build

# 3. Login to cloud.gov
cf login -a https://api.fr.cloud.gov --sso

# 4. Target your organization and space
cf target -o sandbox-gsa -s <your-space-name>

# 5. Deploy
cf push
```

## Monitoring and Management

### View Application Status

```bash
cf apps
```

### View Application Logs

```bash
# Stream live logs
cf logs ttse-petrified-forest-website

# View recent logs
cf logs ttse-petrified-forest-website --recent
```

### Check Application Info

```bash
cf app ttse-petrified-forest-website
```

### Restart Application

```bash
cf restart ttse-petrified-forest-website
```

### Scale Application

```bash
# Scale instances
cf scale ttse-petrified-forest-website -i 2

# Scale memory (if needed beyond 1GB)
cf scale ttse-petrified-forest-website -m 2G
```

## Environment Variables

Set environment variables in cloud.gov:

```bash
cf set-env ttse-petrified-forest-website VARIABLE_NAME "value"
cf restage ttse-petrified-forest-website
```

Or add them to `manifest.yml`:

```yaml
env:
  NODE_ENV: production
  CUSTOM_VAR: value
```

**Note:** Do NOT set `PORT` in manifest.yml - cloud.gov manages this automatically.

## Troubleshooting

### Build Fails

1. Check GitHub Actions logs in the **Actions** tab: https://github.com/GSA-TTS/TTSE-petrified-forest-website/actions
2. Verify all dependencies are in `package.json`
3. Ensure `npm run build` works locally
4. Check Node.js version is specified in `package.json` `engines` field

### Application Won't Start

```bash
# Check logs
cf logs ttse-petrified-forest-website --recent

# Common issues:
# - Missing dependencies (move from devDependencies to dependencies if needed for build)
# - Incorrect start command in Procfile (should be: node build/index.js)
# - Port binding issues (cloud.gov automatically sets PORT - don't override)
# - Missing favicon.svg file in static/ directory
```

### Memory Issues

Current allocation: **512M**

If the app crashes due to memory:

```bash
# Increase memory allocation temporarily
cf scale ttse-petrified-forest-website -m 1G

# To make permanent, update manifest.yml
memory: 1G
```

**Note:** Check space memory limits with `cf space jk-sandbox` before scaling.

### Deployment Fails

```bash
# Check CF CLI version
cf version

# Re-authenticate
cf login -a https://api.fr.cloud.gov --sso

# Verify target
cf target

# Try manual deployment
cf push
```

## Production Checklist

Before going to production:

- [x] Service account created (`ttse-petrified-forest-website-deployer`)
- [x] GitHub Secrets configured (CF_USERNAME, CF_PASSWORD, CF_ORG, CF_SPACE)
- [x] CI/CD pipeline configured (`.github/workflows/deploy.yml`)
- [x] Node.js version specified in `package.json` (`engines` field)
- [x] Memory allocation set (512M - can scale if needed)
- [x] Branch protection enabled on `main` (requires PRs)
- [ ] Configure custom domain (if needed)
- [ ] Set up monitoring and alerting
- [ ] Review cloud.gov security guidance
- [ ] Test deployment via PR merge
- [ ] Configure additional environment variables (if needed)
- [ ] Set up staging environment (optional)
- [ ] Review and update AGENTS.md for production rules

## Resources

- [cloud.gov Documentation](https://docs.cloud.gov)
- [Cloud Foundry CLI Reference](https://cli.cloudfoundry.org/en-US/v8/)
- [SvelteKit adapter-node Documentation](https://kit.svelte.dev/docs/adapter-node)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Repository](https://github.com/GSA-TTS/TTSE-petrified-forest-website)

## Support

For cloud.gov support:
- Email: support@cloud.gov
- Slack: #cloud-gov (TTS Slack)

For application issues:
- Create an issue: https://github.com/GSA-TTS/TTSE-petrified-forest-website/issues
- Contact: Jeff Keene (Project Lead)
