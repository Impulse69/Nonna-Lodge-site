# Hero background videos

Drop your compressed hero clips here with these exact names — the site already
references them, so they light up as soon as the files exist:

| File | Used on |
|---|---|
| `hero-home.mp4` | Home hero |
| `hero-rooms.mp4` | Rooms page hero |
| `hero-experiences.mp4` | Experiences page hero |
| `hero-dining.mp4` | Dining page hero |

Until a file is present, that hero shows its poster **image** (the current photo),
so nothing looks broken while you work.

## How the heroes behave (important)
- The clips **autoplay muted and loop** as a background — so keep them **short
  (~8–15s), silent, and visually calm**. No captions/sound needed (they're muted).
- On **phones and for reduced-motion users, the video is not loaded at all** —
  they get the poster image. This keeps mobile fast and light. So the clips only
  need to look good on desktop/tablet.

## Compress before committing (keep each file small — aim for 3–8 MB)
Raw exports are far too heavy. Run this on each clip first (needs ffmpeg):

```bash
ffmpeg -i input.mov -an \
  -vf "scale='min(1920,iw)':-2" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 26 -preset slow -movflags +faststart \
  hero-home.mp4
```
- `-an` strips audio (heroes are muted). `-crf 26` ≈ small file, good quality —
  raise to 28–30 for even smaller, lower to 22–24 for higher quality.
- Files must be **< 100 MB** (GitHub's hard limit); realistically target a few MB.

> The full 90-second commercial does **not** belong here — that's handled
> separately (a proper video host or click-to-play), since a long clip is too
> heavy for an autoplay background.
