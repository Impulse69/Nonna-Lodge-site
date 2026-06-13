// Batch image optimiser for source photos (run before wiring them into the UI).
//
// Usage:
//   node scripts/optimize-images.mjs [inputDir] [outputDir]
//   npm run optimize:images            # uses the defaults below
//
// It resizes oversized photos down to a sensible max edge and re-encodes them
// as high-quality WebP, which dramatically shrinks large originals. next/image
// then generates per-breakpoint responsive variants at request/build time, so
// these optimised masters are all the repo needs to ship.

import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = process.argv[2] || "public/images/_inbox";
const OUT = process.argv[3] || "public/images/_optimized";
const MAX_EDGE = 2560; // px on the long edge — plenty for full-bleed heroes
const QUALITY = 82;

const INPUT_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".avif"]);

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (INPUT_EXTS.has(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function main() {
  const files = await walk(SRC);
  if (files.length === 0) {
    console.log(`No images found in "${SRC}". Drop photos there and re-run.`);
    return;
  }

  console.log(`Optimising ${files.length} image(s) from "${SRC}" -> "${OUT}"\n`);
  let totalIn = 0;
  let totalOut = 0;
  let failures = 0;

  for (const file of files) {
    const rel = path.relative(SRC, file);
    const outPath = path.join(OUT, rel).replace(/\.[^.]+$/, ".webp");
    await mkdir(path.dirname(outPath), { recursive: true });
    try {
      const inSize = (await stat(file)).size;
      await sharp(file)
        .rotate() // honour EXIF orientation
        .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outPath);
      const outSize = (await stat(outPath)).size;
      totalIn += inSize;
      totalOut += outSize;
      console.log(`  ✓ ${rel}  ${fmtKB(inSize)} -> ${fmtKB(outSize)}`);
    } catch (err) {
      failures += 1;
      console.warn(`  ✗ ${rel}  (skipped: ${err.message})`);
    }
  }

  console.log(
    `\nDone. ${fmtKB(totalIn)} -> ${fmtKB(totalOut)} ` +
      `(${totalIn > 0 ? (100 - (totalOut / totalIn) * 100).toFixed(0) : 0}% smaller)` +
      (failures ? `  •  ${failures} skipped` : ""),
  );
  console.log(`\nNext: move files from "${OUT}" into their final folders under public/images/ and fill in src paths in src/data/.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
