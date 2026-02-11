# Live Integration Restart Runbook

This runbook documents the expected workflow for restarting the live integration process from the current codebase after a service interruption or failure.

## Purpose

This document provides a concise, repeatable procedure for executing a clean production integration run that verifies all implemented LIVE flow items without reusing partial state from previous failed attempts.

## Prerequisites

- Current codebase is in a stable state with all features implemented
- Backend canister is deployed and accessible
- Development environment is properly configured
- Node.js and npm/pnpm are installed

## Integration Restart Workflow

### 1. Clean Build Preparation

Execute the following steps to ensure no partial state from previous runs:

