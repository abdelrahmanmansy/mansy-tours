import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";

const outDir = "out";
const branch = "gh-pages";
const worktree = join(tmpdir(), "mansy-tours-pages-publish");

function git(args, cwd = process.cwd()) {
  return execFileSync("git", args, { cwd, stdio: ["ignore", "pipe", "pipe"] }).toString();
}

async function main() {
  try {
    await readdir(outDir);
  } catch {
    console.error("publish:pages -> out/ not found. Run `npm run build` first.");
    process.exit(1);
  }

  git(["fetch", "origin", branch], process.cwd());

  await rm(worktree, { recursive: true, force: true });
  git(["worktree", "prune"]);
  git(["worktree", "add", "--detach", "--force", worktree, `origin/${branch}`]);

  const entries = await readdir(worktree, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === ".git") continue;
    await rm(join(worktree, entry.name), { recursive: true, force: true });
  }

  await cp(outDir, worktree, { recursive: true });
  await mkdir(worktree, { recursive: true });
  await writeFile(join(worktree, ".nojekyll"), "");

  git(["add", "-A"], worktree);

  const staged = git(["status", "--porcelain"], worktree).trim();

  if (staged) {
    git(["commit", "-m", "Publish static site to gh-pages"], worktree);
    git(["push", "origin", `HEAD:${branch}`], worktree);
    console.log("publish:pages -> pushed out/ to origin/gh-pages");
  } else {
    console.log("publish:pages -> gh-pages already up to date");
  }

  await rm(worktree, { recursive: true, force: true });
  git(["worktree", "prune"]);

  console.log("publish:pages -> https://abdelrahmanmansy.github.io/mansy-tours/");
}

main();
