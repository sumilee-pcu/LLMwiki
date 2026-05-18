import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const distDir = join(root, "dist");
const webDir = join(root, "web");

await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await cp(webDir, distDir, { recursive: true });

console.log("Built Vercel static site into dist/");
