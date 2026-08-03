import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";
import sharp from "sharp";

const distImagesDir = join(process.cwd(), "dist", "images");
const maxWidth = 1600;
const minBytesToOptimize = 512 * 1024;

const files = [];

function scan(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      scan(fullPath);
    } else if (/\.(png|jpe?g|webp)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
}

scan(distImagesDir);

let optimizedCount = 0;
let beforeBytes = 0;
let afterBytes = 0;

for (const file of files) {
  const originalSize = statSync(file).size;
  if (originalSize < minBytesToOptimize) {
    continue;
  }

  const inputBuffer = readFileSync(file);
  const metadata = await sharp(inputBuffer).metadata();
  const width = metadata.width || 0;
  const pipeline = sharp(inputBuffer).rotate();
  const resized = width > maxWidth ? pipeline.resize({ width: maxWidth }) : pipeline;
  const extension = extname(file).toLowerCase();
  let output;
  if (extension === ".png") {
    output = await resized.png({ compressionLevel: 9, palette: true }).toBuffer();
  } else if (extension === ".webp") {
    output = await resized.webp({ quality: 76, effort: 5 }).toBuffer();
  } else {
    output = await resized.jpeg({ quality: 76, mozjpeg: true }).toBuffer();
  }

  const optimizedSize = output.length;
  if (optimizedSize < originalSize) {
    writeFileSync(file, output);
    optimizedCount += 1;
    beforeBytes += originalSize;
    afterBytes += optimizedSize;
  }
}

console.log(
  `Optimized ${optimizedCount} image files: ${(
    beforeBytes /
    1024 /
    1024
  ).toFixed(2)}MB -> ${(afterBytes / 1024 / 1024).toFixed(2)}MB`,
);
