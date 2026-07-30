import { mkdirSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = process.cwd();

const imageJobs = [
  {
    inputDir: "public/images/jiye/sequence",
    outputDir: "public/images/jiye/sequence-mobile",
    count: 18,
    width: 1200,
    quality: 74,
  },
];

for (const job of imageJobs) {
  const outputDir = join(root, job.outputDir);
  mkdirSync(outputDir, { recursive: true });

  for (let index = 1; index <= job.count; index += 1) {
    const input = join(root, job.inputDir, `${index}.png`);
    const output = join(outputDir, `${index}.webp`);

    await sharp(input)
      .rotate()
      .resize({
        width: job.width,
        withoutEnlargement: true,
      })
      .webp({
        quality: job.quality,
        effort: 5,
      })
      .toFile(output);
  }
}
