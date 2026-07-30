import { copyFileSync, existsSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const maxAssetBytes = 25 * 1024 * 1024;

const replacements = [
  {
    from: "videos/kuro-final-showcase-fullscreen.mp4",
    to: "videos/kuro-storyboard-motion-page.mp4",
  },
];

const removeOnly = ["videos/kuro/kuro-30s-video.mp4"];

for (const { from, to } of replacements) {
  const source = join(distDir, from);
  const target = join(distDir, to);
  if (!existsSync(source)) {
    throw new Error(`Cloudflare replacement source missing: ${from}`);
  }
  copyFileSync(source, target);
}

for (const relativePath of removeOnly) {
  const target = join(distDir, relativePath);
  if (existsSync(target)) {
    rmSync(target, { force: true });
  }
}

const oversized = [];
const scan = async (directory) => {
  const { readdir } = await import("node:fs/promises");
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      await scan(fullPath);
    } else if (statSync(fullPath).size > maxAssetBytes) {
      oversized.push(fullPath);
    }
  }
};

await scan(distDir);

if (oversized.length > 0) {
  throw new Error(
    `Cloudflare Pages assets must be 25MiB or smaller:\n${oversized.join("\n")}`,
  );
}
