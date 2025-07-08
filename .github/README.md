# CI/CD Documentation

This document outlines the Continuous Integration and Continuous Deployment (CI/CD) setup for the MetaTask project.

## Overview

The MetaTask project uses GitHub Actions for automated testing, building, and deployment. We have two main workflows:

1. **Staging Deployment** - Triggered on PRs to `stage` branch and deployments when merged
2. **Production Deployment** - Manual workflow triggered from `prod` branch with versioning

## Workflow Structure

### Staging Deployment (`staging_deployment.yml`)

**Triggers:**
- Pull requests to `stage` branch (validation only)
- Push to `stage` branch (actual deployment)

**Jobs:**

**For PRs (Pre-deployment validation):**
1. **Validate** - Security audit, linting, type checking, tests, and build validation
2. **PR Comment** - Adds validation status comment to PR

**For Merges to `stage`:**
1. **Deploy Staging** - Deploys to staging environment
2. **Health Check** - Verifies deployments are working
3. **Notify** - Sends notifications to team

### Production Deployment (`production_deployment.yml`)

**Triggers:**
- Manual workflow dispatch from `prod` branch only
- Requires version input and "DEPLOY" confirmation

**Required Inputs:**
- **Version**: Version to deploy (e.g., v1.0.0)
- **Confirm Production**: Must type "DEPLOY" to confirm
- **Skip Tests**: Optional flag for hotfixes

**Jobs:**
1. **Validate Deployment** - Validates inputs and branch
2. **Security & Quality** - Enhanced security checks with CodeQL
3. **Tests** - Comprehensive testing (unit, integration, e2e) - can be skipped
4. **Build** - Production builds with versioned artifacts
5. **Deploy Production** - Deploys to production environment
6. **Database Migrations** - Runs database migrations
7. **Health Check** - Comprehensive health checks
8. **Performance Monitoring** - Lighthouse CI performance tests
9. **Security Scan** - Post-deployment security scan with OWASP ZAP
10. **Create Release** - Creates Git tag and GitHub release
11. **Notify Success** - Team notifications
12. **Rollback** - Automatic rollback on failure

## Required GitHub Secrets

### Staging Environment

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `STAGING_SUPABASE_URL` | Staging Supabase project URL | `https://staging-project.supabase.co` |
| `STAGING_SUPABASE_SERVICE_ROLE_KEY` | Staging Supabase service role key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `STAGING_SUPABASE_ANON_KEY` | Staging Supabase anonymous key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `STAGING_API_URL` | Staging API base URL | `https://staging-api.metatask.ai` |

### Production Environment

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `SUPABASE_URL` | Production Supabase project URL | `https://production-project.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Production Supabase service role key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `SUPABASE_ANON_KEY` | Production Supabase anonymous key | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `PRODUCTION_API_URL` | Production API base URL | `https://api.metatask.ai` |

### Vercel Deployment

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `VERCEL_TOKEN` | Vercel deployment token | Vercel Dashboard → Settings → Tokens |
| `VERCEL_ORG_ID` | Vercel organization ID | Vercel Dashboard → Settings → General |
| `VERCEL_PROJECT_ID` | Vercel project ID | Project Settings → General |

### Railway Deployment (API)

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `RAILWAY_TOKEN` | Railway deployment token | Railway Dashboard → Account → Tokens |

### Notifications

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `SLACK_WEBHOOK_URL` | Slack webhook for notifications | Slack App → Incoming Webhooks |

## Environment Configuration

### GitHub Environments

Set up the following environments in your GitHub repository:

1. **production** - Requires manual approval for production deployments
   - Protection rules: Require reviewers
   - Environment secrets: Production-specific secrets

### Branch Protection Rules

Configure the following branch protection rules:

#### `prod` branch:
- Require pull request reviews before merging (2 reviewers recommended)
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Include administrators in restrictions
- Dismiss stale reviews when new commits are pushed

#### `stage` branch:
- Require pull request reviews before merging (1 reviewer)
- Require status checks to pass before merging
- Require branches to be up to date before merging

## Deployment Targets

### Web Application (Next.js)
- **Staging**: `staging.metatask.ai`
- **Production**: `metatask.ai`, `www.metatask.ai`
- **Platform**: Vercel

### API (NestJS)
- **Staging**: Staging environment (Railway/AWS/GCP)
- **Production**: Production environment (Railway/AWS/GCP)
- **Platform**: Railway (configurable)

## Monitoring and Alerting

### Health Checks
- Web application availability
- API endpoint functionality
- Database connectivity

### Performance Monitoring
- Lighthouse CI for web vitals
- API response time monitoring
- Error rate tracking

### Security Scanning
- Dependency vulnerability scanning
- Code security analysis with CodeQL
- Post-deployment security scanning with OWASP ZAP

## Rollback Procedures

### Automatic Rollback
- Triggered on deployment failure
- Reverts to previous stable version
- Sends immediate notifications

### Manual Rollback
1. Go to GitHub Actions
2. Find the failed deployment
3. Click "Re-run failed jobs" or trigger rollback manually
4. Monitor health checks

## Development Workflow

### Feature Development
1. Create feature branch from `stage`
2. Implement changes
3. Push to feature branch
4. Create PR to `stage`
5. **Pre-deployment validation** runs automatically
6. Review PR and validation results
7. Merge to `stage`
8. **Staging deployment** automatically triggered
9. Test thoroughly in staging environment

### Production Release
1. When staging is stable, create PR from `stage` to `prod`
2. Review and approve (requires 2 reviewers)
3. Merge to `prod`
4. Go to GitHub Actions → Production Deployment
5. Click "Run workflow"
6. Fill in required inputs:
   - **Version**: e.g., `v1.2.0`
   - **Confirm Production**: Type `DEPLOY`
   - **Skip Tests**: Leave unchecked (unless hotfix)
7. Click "Run workflow"
8. Monitor deployment progress and health checks
9. Verify production deployment success

## Troubleshooting

### Common Issues

#### Build Failures
- Check dependency versions
- Verify environment variables
- Review TypeScript/ESLint errors

#### Deployment Failures
- Verify secrets are correctly set
- Check service availability
- Review deployment logs

#### Health Check Failures
- Verify service endpoints
- Check database connectivity
- Review application logs

### Getting Help

1. Check GitHub Actions logs
2. Review deployment service logs
3. Check Slack notifications for details
4. Contact the development team

## Configuration Files

### Additional Configuration Files Needed

1. **`.zap/rules.tsv`** - OWASP ZAP security scan rules
2. **`lighthouse.config.js`** - Lighthouse CI configuration
3. **`vercel.json`** - Vercel deployment configuration (in web app)

## Security Best Practices

1. **Secrets Management**
   - Use GitHub Secrets for sensitive data
   - Rotate secrets regularly
   - Limit secret access to necessary workflows

2. **Environment Isolation**
   - Separate staging and production environments
   - Use different databases and services
   - Implement proper access controls

3. **Monitoring**
   - Set up alerts for deployment failures
   - Monitor security scan results
   - Track performance metrics

## Maintenance

### Regular Tasks
- Update GitHub Actions versions
- Review and update security scan rules
- Monitor and optimize build times
- Update deployment service configurations

### Quarterly Reviews
- Review secrets and rotate if needed
- Update security scanning rules
- Optimize CI/CD performance
- Review deployment success rates 