const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('build.css', 'utf8');

// Replace the Tailwind CDN and config and the old style block
const startToken = '<script src="https://cdn.tailwindcss.com"></script>';
const endToken = '</style>';

const startIndex = html.indexOf(startToken);
const endIndex = html.indexOf(endToken) + endToken.length;

if (startIndex !== -1 && endIndex !== -1) {
    const newCssBlock = `<style>\n${css}\n</style>`;
    html = html.substring(0, startIndex) + newCssBlock + html.substring(endIndex);
} else {
    console.error("Tokens not found!");
}

// Replace images
html = html.replace('https://img.webme.com/pic/a/angelsoluciones/angelejecutivocopia.jpg', 'perfil.jpg');
html = html.replace('https://img.webme.com/pic/a/angelsoluciones/8XwL5d.png', 'qr.png');

fs.writeFileSync('index.html', html);
console.log('Update complete!');
