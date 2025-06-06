#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Documentation - Intentive</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body { 
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; 
  max-width: 800px; 
  margin: 0 auto; 
  padding: 2rem; 
  line-height: 1.6; 
  color: #333; 
}
h1 { color: #7C3AED; margin-bottom: 1rem; }
h2 { color: #4B5563; margin-top: 2rem; }
.notice { 
  background: #f3f4f6; 
  padding: 1rem; 
  border-radius: 0.5rem; 
  margin: 1rem 0; 
  border-left: 4px solid #7C3AED;
}
a { color: #7C3AED; text-decoration: none; }
a:hover { text-decoration: underline; }
ul { margin: 1rem 0; }
li { margin: 0.5rem 0; }
</style>
</head>
<body>
<h1>Documentation</h1>
<div class="notice">
<p><strong>Note:</strong> This is a deployment-only version without integrated documentation.</p>
</div>
<p>The complete documentation is available in the <a href="https://github.com/agenticaivc/intentive" target="_blank">main Intentive repository</a>.</p>
<p>For the full experience including integrated documentation, please visit the development version or check out the repository directly.</p>
<h2>Quick Links</h2>
<ul>
<li><a href="https://github.com/agenticaivc/intentive#readme" target="_blank">Getting Started Guide</a></li>
<li><a href="https://github.com/agenticaivc/intentive/tree/main/packages/docs-website" target="_blank">Documentation Source</a></li>
<li><a href="https://github.com/agenticaivc/intentive/issues" target="_blank">GitHub Issues</a></li>
</ul>
</body>
</html>`;

// Create the docs directory if it doesn't exist
const docsDir = path.join(__dirname, '..', 'public', 'static', 'docs');
fs.mkdirSync(docsDir, { recursive: true });

// Write the fallback HTML
fs.writeFileSync(path.join(docsDir, 'index.html'), fallbackHtml);

console.log('Created fallback documentation page'); 