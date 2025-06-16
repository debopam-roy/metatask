#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI color codes for output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

console.log(`${colors.blue}=== MetaTask Setup Checker ===${colors.reset}\n`);

// Check if pnpm is installed
try {
  const pnpmVersion = execSync('pnpm --version').toString().trim();
  console.log(`${colors.green}✓ pnpm is installed (${pnpmVersion})${colors.reset}`);
} catch (error) {
  console.log(`${colors.red}✗ pnpm is not installed. Please install it using: npm install -g pnpm${colors.reset}`);
  process.exit(1);
}

// Check if required files exist
const requiredFiles = [
  'package.json',
  'pnpm-workspace.yaml',
  'turbo.json',
  'tsconfig.json',
  '.npmrc',
  '.gitignore'
];

requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(process.cwd(), file))) {
    console.log(`${colors.green}✓ ${file} exists${colors.reset}`);
  } else {
    console.log(`${colors.red}✗ ${file} is missing${colors.reset}`);
  }
});

// Check if required directories exist
const requiredDirs = [
  'apps/web',
  'apps/api',
  'apps/ai-service',
  'apps/blockchain',
  'packages/ui',
  'packages/utils',
  'packages/types'
];

requiredDirs.forEach(dir => {
  if (fs.existsSync(path.join(process.cwd(), dir))) {
    console.log(`${colors.green}✓ ${dir} directory exists${colors.reset}`);
  } else {
    console.log(`${colors.red}✗ ${dir} directory is missing${colors.reset}`);
  }
});

// Check if .cursor directory exists
if (fs.existsSync(path.join(process.cwd(), '.cursor'))) {
  console.log(`${colors.green}✓ .cursor directory exists${colors.reset}`);
  
  // Check if scratchpad.md exists
  if (fs.existsSync(path.join(process.cwd(), '.cursor', 'scratchpad.md'))) {
    console.log(`${colors.green}✓ .cursor/scratchpad.md exists${colors.reset}`);
  } else {
    console.log(`${colors.yellow}! .cursor/scratchpad.md is missing${colors.reset}`);
  }
} else {
  console.log(`${colors.yellow}! .cursor directory is missing${colors.reset}`);
}

console.log(`\n${colors.blue}=== Setup Check Complete ===${colors.reset}`);
console.log(`\nTo install dependencies, run: ${colors.green}pnpm install${colors.reset}`);
console.log(`To start development servers, run: ${colors.green}pnpm dev${colors.reset}`); 