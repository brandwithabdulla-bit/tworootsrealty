const fs = require('fs');
const path = require('path');

const files = [
  'src/app/projects/[slug]/page.js',
  'src/app/areas/[slug]/page.js',
  'src/app/developers/[slug]/page.js'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace literal backslash followed by backtick
    content = content.split('\\\\`').join('\`');
    // Replace literal backslash followed by dollar sign
    content = content.split('\\\\$').join('$');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log("Fixed " + file);
  }
});
