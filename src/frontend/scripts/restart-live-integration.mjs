#!/usr/bin/env node

/**
 * Live Integration Restart Helper Script
 * 
 * This script performs a clean, repeatable build preparation and execution
 * for the AntiFraud production integration workflow.
 * 
 * On success, outputs exactly: "Módulo live integrado."
 * All diagnostic output is routed to stderr.
 */

import { execSync } from 'child_process';
import { existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const frontendRoot = join(__dirname, '..');

// Route all diagnostic output to stderr
const log = (msg) => console.error(`[Integration] ${msg}`);
const error = (msg) => console.error(`[ERROR] ${msg}`);

/**
 * Execute a command and handle errors
 */
function exec(command, options = {}) {
  try {
    execSync(command, {
      cwd: frontendRoot,
      stdio: ['inherit', 'pipe', 'inherit'],
      ...options
    });
    return true;
  } catch (err) {
    error(`Command failed: ${command}`);
    error(err.message);
    return false;
  }
}

/**
 * Clean build artifacts
 */
function cleanBuildArtifacts() {
  log('Cleaning build artifacts...');
  
  const pathsToClean = [
    join(frontendRoot, 'dist'),
    join(frontendRoot, '.vite'),
    join(frontendRoot, 'node_modules', '.vite'),
    join(frontendRoot, 'node_modules', '.cache')
  ];

  for (const path of pathsToClean) {
    if (existsSync(path)) {
      log(`Removing ${path}`);
      rmSync(path, { recursive: true, force: true });
    }
  }

  log('Build artifacts cleaned.');
}

/**
 * Verify required files exist
 */
function verifyRequiredFiles() {
  log('Verifying required files...');

  const requiredFiles = [
    'public/manifest.webmanifest',
    'public/service-worker.js',
    'src/App.tsx',
    'src/main.tsx',
    'index.html'
  ];

  for (const file of requiredFiles) {
    const filePath = join(frontendRoot, file);
    if (!existsSync(filePath)) {
      error(`Required file missing: ${file}`);
      return false;
    }
  }

  log('All required files present.');
  return true;
}

/**
 * Check if dependencies are installed
 */
function checkDependencies() {
  log('Checking dependencies...');
  
  const nodeModulesPath = join(frontendRoot, 'node_modules');
  if (!existsSync(nodeModulesPath)) {
    log('node_modules not found, dependencies need to be installed.');
    return false;
  }

  log('Dependencies appear to be installed.');
  return true;
}

/**
 * Install dependencies
 */
function installDependencies() {
  log('Installing dependencies...');
  
  // Try pnpm first, fall back to npm
  const hasPnpm = exec('which pnpm', { stdio: 'ignore' });
  const packageManager = hasPnpm ? 'pnpm' : 'npm';
  
  log(`Using package manager: ${packageManager}`);
  
  if (!exec(`${packageManager} install`)) {
    error('Failed to install dependencies');
    return false;
  }

  log('Dependencies installed successfully.');
  return true;
}

/**
 * Run production build
 */
function runProductionBuild() {
  log('Running production build...');
  
  // Check for pnpm or npm
  const hasPnpm = exec('which pnpm', { stdio: 'ignore' });
  const packageManager = hasPnpm ? 'pnpm' : 'npm';
  
  if (!exec(`${packageManager} run build`)) {
    error('Production build failed');
    return false;
  }

  log('Production build completed successfully.');
  return true;
}

/**
 * Verify build output
 */
function verifyBuildOutput() {
  log('Verifying build output...');

  const distPath = join(frontendRoot, 'dist');
  if (!existsSync(distPath)) {
    error('Build output directory (dist) not found');
    return false;
  }

  const requiredBuildFiles = [
    'index.html',
    'manifest.webmanifest',
    'service-worker.js'
  ];

  for (const file of requiredBuildFiles) {
    const filePath = join(distPath, file);
    if (!existsSync(filePath)) {
      error(`Required build file missing: ${file}`);
      return false;
    }
  }

  log('Build output verified.');
  return true;
}

/**
 * Main integration restart workflow
 */
async function main() {
  log('Starting live integration restart workflow...');
  log('');

  // Step 1: Clean build artifacts
  cleanBuildArtifacts();
  log('');

  // Step 2: Verify required files
  if (!verifyRequiredFiles()) {
    error('Required files verification failed');
    process.exit(1);
  }
  log('');

  // Step 3: Check and install dependencies
  if (!checkDependencies()) {
    if (!installDependencies()) {
      error('Dependency installation failed');
      process.exit(1);
    }
  }
  log('');

  // Step 4: Run production build
  if (!runProductionBuild()) {
    error('Production build failed');
    process.exit(1);
  }
  log('');

  // Step 5: Verify build output
  if (!verifyBuildOutput()) {
    error('Build output verification failed');
    process.exit(1);
  }
  log('');

  log('Live integration restart completed successfully.');
  log('');
  log('Next steps:');
  log('1. Serve the production build (e.g., npx serve dist)');
  log('2. Follow the verification checklist in PRODUCTION_BUILD_VERIFICATION.md');
  log('3. Execute manual testing in the order specified in LIVE_INTEGRATION_RESTART_RUNBOOK.md');
  log('');

  // Output the exact completion message to stdout (all other output is on stderr)
  console.log('Módulo live integrado.');
}

// Run the main workflow
main().catch((err) => {
  error('Unexpected error during integration restart:');
  error(err.message);
  process.exit(1);
});
