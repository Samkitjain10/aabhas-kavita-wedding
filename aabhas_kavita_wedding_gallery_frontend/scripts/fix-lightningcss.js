#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const lightningcssDir = path.join(__dirname, '..', 'node_modules', 'lightningcss');
const nativePackageDir = path.join(__dirname, '..', 'node_modules', 'lightningcss-darwin-arm64');
const nativeFile = path.join(nativePackageDir, 'lightningcss.darwin-arm64.node');
const symlinkPath = path.join(lightningcssDir, 'lightningcss.darwin-arm64.node');

// Only create symlink if native package exists
if (fs.existsSync(nativeFile)) {
  try {
    // Remove existing symlink or file if it exists
    if (fs.existsSync(symlinkPath)) {
      fs.unlinkSync(symlinkPath);
    }
    // Create symlink with relative path
    fs.symlinkSync(
      '../lightningcss-darwin-arm64/lightningcss.darwin-arm64.node',
      symlinkPath
    );
    console.log('✓ Created lightningcss native module symlink');
  } catch (error) {
    console.warn('Warning: Could not create lightningcss symlink:', error.message);
  }
} else {
  console.warn('Warning: lightningcss native package not found at:', nativeFile);
}

