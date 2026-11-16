# Interactive Exhibition

## Live demo

[Open the working assignment](https://srimanh.github.io/arvr-exhibition-navigation/)

Runs in a desktop browser. No cloning or local server required.

A desktop 3D exhibition with two supplied displays: a solar panel and a door mechanism. Visitors can inspect each display and return to the entrance.

Live site: https://srimanh.github.io/arvr-exhibition-navigation/

## Visit and navigate

Open the live site in a current desktop browser with WebGL enabled.

- **Energy Display:** inspect the solar panel and its cell grid.
- **Mechanisms Display:** inspect the door and yellow hinge.
- **Back to Entrance:** return to an overview of both exhibits.
- **Keyboard:** use Tab to select a button and Enter or Space to activate it. A visible outline marks focus.

The status message identifies the selected view. The camera readout shows its position and look-at target. These are instant viewpoint changes; the exhibits do not move.

## Run locally

```bash
git clone https://github.com/srimanh/arvr-exhibition-navigation.git
cd arvr-exhibition-navigation
```

Open `index.html` in your browser. The scene and library are included locally; no npm install or model download is needed.

If local-file access is restricted, use VS Code Live Server or, with Python 3 installed:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000 . Keep the terminal running; stop it with Ctrl+C.

## Project files

- `index.html`: exhibition geometry, buttons and page layout.
- `student.js`: completed camera destinations.
- `harness.js`: supplied camera helper and event wiring.
- `TEST-RECORD.md`: published-site test results and limitations.
- `vendor/`: pinned A-Frame library and licence.

## Credits

Solar panel, door and exhibition geometry are original procedural models supplied by the course starter. No third-party model downloads were used.

A-Frame **1.7.0** is bundled from https://aframe.io/releases/1.7.0/aframe.min.js under its MIT licence (`vendor/AFRAME-LICENSE`). Bundled dependency notices are retained.

## Access and limitations

No camera, microphone, phone or headset is required. This is a desktop virtual exhibition, not validated immersive VR or physical AR. GitHub Pages serves the public files; do not commit personal data or secrets. Initial website access needs internet. Browser coverage and actual verification results are recorded in `TEST-RECORD.md`.

## Looking and moving in 3D

Click or Tab into the scene to focus it. Drag with the mouse to look around. Hold W/A/S/D or arrow keys to move. Tab leaves the scene; movement is disabled when it loses focus. Destination buttons reset both camera position and viewing direction, so Back to Entrance recovers from wandering. Live readout follows the camera. No collision boundaries are implemented: you can pass through displays or leave the exhibition area. Named viewpoints remain the required student task; exploration controls are supplied.
