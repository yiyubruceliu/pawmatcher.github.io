const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'out');
const targetDir = path.join(__dirname, '..', 'docs');
const BASE_PATH = '/pawmatcher.github.io';

// Remove existing docs directory if it exists
if (fs.existsSync(targetDir)) {
  fs.rmSync(targetDir, { recursive: true, force: true });
}

// Copy out directory to docs
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    // Check if it's an HTML or CSS file that needs path fixing
    if (src.endsWith('.html')) {
      let content = fs.readFileSync(src, 'utf8');
      // Fix paths: replace absolute paths with relative paths for GitHub Pages
      // Escape the basePath for regex
      const escapedBasePath = BASE_PATH.replace(/\//g, '\\/');
      
      // Replace all instances of /pawmatcher.github.io/ with ./ for relative paths
      content = content.replace(new RegExp(escapedBasePath + '/', 'g'), './');
      
      fs.writeFileSync(dest, content, 'utf8');
    } else if (src.endsWith('.css')) {
      let content = fs.readFileSync(src, 'utf8');
      // For CSS files, paths are relative to the CSS file location
      // CSS is at docs/_next/static/css/ so _next/static/media/ should be ../media/
      const escapedBasePath = BASE_PATH.replace(/\//g, '\\/');
      
      // Replace font URLs: /pawmatcher.github.io/_next/static/media/ with ../media/
      content = content.replace(
        new RegExp(escapedBasePath + '/_next/static/media/', 'g'),
        '../media/'
      );
      
      fs.writeFileSync(dest, content, 'utf8');
    } else {
      fs.copyFileSync(src, dest);
    }
  }
}

copyRecursiveSync(sourceDir, targetDir);
console.log('✓ Successfully copied build output to docs/ folder');
console.log('✓ Fixed all paths for GitHub Pages deployment');

