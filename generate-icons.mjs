import fs from 'fs';
import path from 'path';

// Create SVG icons for HR Tuition Centre logo
const createSvgIcon = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="#0f172a"/>
  <rect x="${size * 0.05}" y="${size * 0.05}" width="${size * 0.9}" height="${size * 0.9}" rx="${size * 0.18}" fill="#0d9488" opacity="0.15"/>
  <text x="50%" y="54%" font-family="Arial, sans-serif" font-weight="900" font-size="${size * 0.42}" fill="#14b8a6" text-anchor="middle" dominant-baseline="middle">HR</text>
  <circle cx="${size * 0.8}" cy="${size * 0.2}" r="${size * 0.06}" fill="#14b8a6"/>
</svg>
`;

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

fs.writeFileSync(path.join(publicDir, 'pwa-192.svg'), createSvgIcon(192));
fs.writeFileSync(path.join(publicDir, 'pwa-512.svg'), createSvgIcon(512));

console.log('PWA SVG icons generated successfully!');
