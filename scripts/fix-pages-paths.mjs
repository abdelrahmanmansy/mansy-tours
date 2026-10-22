import { copyFile, readdir, readFile, stat, writeFile } from "node:fs/promises";
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

/**
 * Next.js writes the per-segment RSC payloads as nested folders
 * (`tours/__next.tours/__PAGE__.txt`) while the client router requests the
 * flat name (`tours/__next.tours.__PAGE__.txt`). Static hosts serve the flat
 * path only, so mirror every nested payload as a flat file next to its route.
 */
async function createFlatPayloadAliases() {
  let created = 0;

  async function visit(dir) {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const full = join(dir, entry.name);

      if (entry.name.startsWith("__next.")) {
        await mirror(dir, full, entry.name);
      }

      await visit(full);
    }
  }

  async function mirror(routeDir, segmentDir, namePrefix) {
    const entries = await readdir(segmentDir, { withFileTypes: true });

    for (const entry of entries) {
      const full = join(segmentDir, entry.name);

      if (entry.isDirectory()) {
        await mirror(routeDir, full, `${namePrefix}.${entry.name}`);
        continue;
      }

      await copyFile(full, join(routeDir, `${namePrefix}.${entry.name}`));
      created += 1;
    }
  }

  await visit(outDir);
  return created;
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

  const aliases = await createFlatPayloadAliases();
  console.log(`postbuild: created ${aliases} flat RSC payload alias(es)`);
}

main();
