# cloud.gov Deployment Guide

## Overview

This project is configured to deploy to **cloud.gov Platform** (not cloud.gov Pages) using GitHub Actions for continuous deployment. The SvelteKit SSR application runs as a Node.js application on cloud.gov.

## Prerequisites

1. **cloud.gov Account** - Access to sandbox-gsa organization
2. **GitHub Repository** - Code hosted on GitHub
3. **GitHub Secrets** - Cloud Foundry credentials configured
4. **Space** - jk-sandbox space in sandbox-gsa

## Architecture

- **Platform:** cloud.gov Platform (Cloud Foundry)
- **Buildpack:** Node.js buildpack
- **Runtime:** Node.js 20
- **Adapter:** @sveltejs/adapter-node (SSR support)
- **Memory:** 1GB
- **Instances:** 1 (can be scaled up)
- **Organization:** sandbox-gsa
- **Space:** jk-sandbox
- **App Name:** ttse-petrified-forest-website
- **URL:** https://ttse-petrified-forest-website.app.cloud.gov

## Configuration Files

### `manifest.yml`
Defines the cloud.gov application configuration:
- Application name: `ttse-petrified-forest-website`
- Memory allocation: 1GB
- Node.js buildpack
- Production environment variables
- Application route (URL): https://ttse-petrified-forest-website.app.cloud.gov

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

## GitHub Secrets Setup

Before the first deployment, configure these secrets in your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets:

| Secret Name | Description | Example |
|------------|-------------|---------|
| `CF_USERNAME` | Your cloud.gov username | `yourname@gsa.gov` |
| `CF_PASSWORD` | Your cloud.gov password | `your-password` |
| `CF_ORG` | Your cloud.gov organization | `sandbox-gsa` |
| `CF_SPACE` | Your cloud.gov space name | `dev` or `production` |

### How to Add Secrets:

```bash
# In GitHub UI:
Repository → Settings → Secrets and variables → Actions → New repository secret
```

## Deployment Methods

### Automatic Deployment (Recommended)

Every push to the `main` branch automatically triggers deployment:

```bash
git add .
git commit -m "feat: add new feature"
git push origin main
```

The GitHub Actions workflow will:
1. Run tests and linting
2. Build the application
3. Deploy to cloud.gov
4. Report status in the Actions tab

### Manual Deployment

Trigger deployment manually from GitHub:

1. Go to **Actions** tab
2. Select **Deploy to cloud.gov** workflow
3. Click **Run workflow**
4. Select branch and click **Run workflow**

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
  PORT: 8080
  CUSTOM_VAR: value
```

## Troubleshooting

### Build Fails

1. Check GitHub Actions logs in the **Actions** tab
2. Verify all dependencies are in `package.json`
3. Ensure `npm run build` works locally

### Application Won't Start

```bash
# Check logs
cf logs ttse-petrified-forest-website --recent

# Common issues:
# - Missing dependencies (move from devDependencies to dependencies)
# - Incorrect start command in Procfile
# - Port binding issues (use PORT environment variable)
```

### Memory Issues

If the app crashes due to memory:

```bash
# Increase memory allocation
cf scale ttse-petrified-forest-website -m 2G

# Or update manifest.yml
memory: 2G
```

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

- [ ] Move build dependencies to `dependencies` in package.json if needed by cloud.gov
- [ ] Configure custom domain (if needed)
- [ ] Set appropriate memory/instances in manifest.yml
- [ ] Configure environment variables
- [ ] Set up monitoring and alerting
- [ ] Review cloud.gov security guidance
- [ ] Test deployment in staging space first
- [ ] Configure CI/CD for staging and production environments
- [ ] Set up proper secret management
- [ ] Review logs configuration

## Resources

- [cloud.gov Documentation](https://docs.cloud.gov)
- [Cloud Foundry CLI Reference](https://cli.cloudfoundry.org/en-US/v8/)
- [SvelteKit adapter-node Documentation](https://kit.svelte.dev/docs/adapter-node)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Support

For cloud.gov support:
- Email: support@cloud.gov
- Slack: #cloud-gov (TTS Slack)

For application issues:
- Create an issue in the GitHub repository
- Contact: Jeff Keene (Project Lead)
