import { mkdirSync, copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const distDir = join(process.cwd(), "dist");
const indexPath = join(distDir, "index.html");

if (!existsSync(indexPath)) {
  throw new Error("dist/index.html was not found. Run vite build first.");
}

const projectSlugs = ["miiro", "jiye", "kuro"];
const routes = [
  "work",
  "experiments",
  "ai-workflow",
  "resume",
  "about",
  "contact",
  ...projectSlugs.flatMap((slug) => [`work/${slug}`, `projects/${slug}`]),
];

for (const route of routes) {
  const target = join(distDir, route, "index.html");
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(indexPath, target);
}

copyFileSync(indexPath, join(distDir, "404.html"));
