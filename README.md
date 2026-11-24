# AI DJ — Wrist-Controlled Music

A webcam-based experiment that switches between two audio tracks using wrist detections.

**Repository created:** 2022-11-24  
**Project status:** Learning project / historical snapshot  
**Earliest recorded commit (author date):** 2022-11-23

## Features and implementation

- PoseNet wrist coordinates and confidence scores.
- P5.sound playback checks.
- Conditional song switching.
- Visual markers and song-name display.

## Technologies

HTML, CSS, JavaScript, Bootstrap, jQuery, p5.js, p5.sound, ml5.js, PoseNet.

## How the code works

`preload()` loads two audio files, `gotPoses()` records wrist landmarks, and `draw()` checks wrist confidence before switching playback. The threshold in the checked-in code is 0.2.

## Project structure

| File | Purpose |
| --- | --- |
| [`index.html`](index.html) | Main page and user interface |
| [`main.js`](main.js) | Project-specific JavaScript |
| [`style.css`](style.css) | Page styling |

Key functions in the source:
- `main.js`: `gotPoses()`.

## Run or explore locally

```bash
git clone https://github.com/Avenger-Sonic123/AI-DJ-Webapp-Project.git
cd AI-DJ-Webapp-Project
python -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) in your browser. The local server requires Python 3; browser-based dependencies may also require internet access.

Allow camera access and show one wrist at a time; inspect the song label and playback.

## Current status and limitations

Older browser audio autoplay policies and CDN dependencies may prevent playback; simultaneous wrist detections can compete.

## Related project snapshots

Other repositories in this project family:
- [AI_DJ_Project1](https://github.com/Avenger-Sonic123/AI_DJ_Project1) — repository created 2022-10-26
- [AI-DJ-WebApp2](https://github.com/Avenger-Sonic123/AI-DJ-WebApp2) — repository created 2022-11-06
- [try2forAI-DJ-App](https://github.com/Avenger-Sonic123/try2forAI-DJ-App) — repository created 2022-11-06
- [AI-DJ2](https://github.com/Avenger-Sonic123/AI-DJ2) — repository created 2022-11-22

---

Source reference: [`0f7efc87`](https://github.com/Avenger-Sonic123/AI-DJ-Webapp-Project/tree/0f7efc875a7925b9cd30fc38446e82fcf1b5e43f) on `main`, verified against GitHub on 2026-11-24. Documentation is based on static source review; runtime behavior has not been tested.
