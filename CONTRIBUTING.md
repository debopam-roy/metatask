# Contributing to MetaTask

Thank you for considering contributing to MetaTask! This document provides guidelines and instructions for contributing to this project.

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/metatask.git`
3. Install pnpm if you don't have it: `npm install -g pnpm`
4. Install dependencies: `pnpm install`
5. Start the development server: `pnpm dev`

## Project Structure

- `apps/` - Contains all applications
  - `web/` - Next.js frontend
  - `api/` - GraphQL API server
  - `ai-service/` - AI service for matching and credibility scoring
  - `blockchain/` - Smart contracts and blockchain integration
- `packages/` - Contains shared packages
  - `ui/` - Shared UI components
  - `utils/` - Shared utilities
  - `types/` - Shared TypeScript types

## Pull Request Process

1. Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Run tests: `pnpm test`
4. Commit your changes: `git commit -m "Add feature: your feature name"`
5. Push to your fork: `git push origin feature/your-feature-name`
6. Open a pull request against the main repository

## Coding Standards

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Keep pull requests focused on a single concern

## License

By contributing to MetaTask, you agree that your contributions will be licensed under the project's MIT license. 