const fs = require('fs');
const path = require('path');

// Read the navigation and footer HTML from index.html
const indexContent = fs.readFileSync('index.html', 'utf8');
const navMatch = indexContent.match(/<!-- Navigation -->[\s\S]*?<\/nav>/);
const navHTML = navMatch ? navMatch[0] : '';
const footerMatch = indexContent.match(/<!-- Footer -->[\s\S]*?<\/footer>/);
const footerHTML = footerMatch ? footerMatch[0] : '';

// Get all HTML files
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html') && file !== 'index.html');

// Update each HTML file
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (navHTML) {
    content = content.replace(/<!-- Navigation -->[\s\S]*?<\/nav>/, navHTML);
  }
  if (footerHTML) {
    content = content.replace(/<!-- Footer -->[\s\S]*?<\/footer>/, footerHTML);
  }
  fs.writeFileSync(file, content, 'utf8');
});