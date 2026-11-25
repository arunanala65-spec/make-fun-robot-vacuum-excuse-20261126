// The Robot Vacuum's Best Excuse — make.fun
// One line: the funniest excuse a robot vacuum gives for missing a spot.
// Entry: make-fun-robot-vacuum-excuse-20261126

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My sensors found the crumb, my map filed it as furniture, and my battery voted 1-0 to let it live. Democracy is dusty.";

if (line.length < 1 || line.length > 139) {
  throw new Error(`Line must be 1-139 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
