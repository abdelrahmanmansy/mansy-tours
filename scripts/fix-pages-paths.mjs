import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const basePath = "/mansy-tours";
const outDir = "out";
const extensions = new Set([".html", ".js", ".json", ".txt", ".webmanifest", ".xml"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }

  return files;
}

function prefix(content) {
  return content
    .replace(/(["'(=])(\/images\/)/g, `$1${basePath}$2`)
    .replace(/(["'(=])(\/favicon\.ico)/g, `$1${basePath}$2`)
    .replace(/(["'(=])(\/manifest\.webmanifest)/g, `$1${basePath}$2`);
}

async function main() {
  if (process.env.DEPLOY_TARGET !== "github") {
    console.log("postbuild: skipped (not a GitHub Pages deploy)");
    return;
  }

  try {
    await stat(outDir);
  } catch {
    console.log("postbuild: no out/ directory, nothing to fix");
    return;
  }

  const files = await walk(outDir);
  let changed = 0;

  for (const file of files) {
    const dot = file.lastIndexOf(".");
    if (dot === -1 || !extensions.has(file.slice(dot))) continue;

    const original = await readFile(file, "utf8");
    const updated = prefix(original);

    if (updated !== original) {
      await writeFile(file, updated, "utf8");
      changed += 1;
    }
  }

  console.log(`postbuild: prefixed ${changed} file(s) with ${basePath}`);
}

main();
