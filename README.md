# Exhibition Navigation — LU 4.5

A supplied desktop exhibition contains a solar panel on the left and a door mechanism on the right. The camera starts at the entrance. Navigation buttons are wired, but their destinations in `student.js` are incomplete.

## Start

Fork this repository, then clone your fork:

```bash
git clone https://github.com/<your-username>/arvr-exhibition-navigation.git
cd arvr-exhibition-navigation
```

Open the folder in VS Code. Open `index.html` in a current Chrome, Edge or Firefox browser with WebGL enabled. No npm install, model downloads, camera or headset is required; A-Frame 1.7.0 is bundled.

If local files are restricted, use VS Code Live Server, or run `python3 -m http.server 8000 --bind 127.0.0.1` here and visit http://localhost:8000 . Stop with Ctrl+C. Python is needed only for this alternative.

Confirm both displays appear in the overview. Clicking a starter button reports an incomplete destination without moving the camera. This is the intended task, not an installation fault.

## Destination table

| Destination key | Camera position [X, Y, Z] | Look-at target [X, Y, Z] |
|---|---|---|
| energy | [-3, 2, 2] | [-3, 1.3, -2] |
| mechanisms | [3, 2, 2] | [3, 1.1, -2] |
| entrance | [0, 3, 8] | [0, 1.3, -2] |

Position says where the visitor is; target says which point the camera faces. The supplied helper calculates camera rotation from those two points. You do not need to write camera mathematics.

## Three tasks

Edit only `student.js`. Replace each `null` with the matching numeric array from the table. Leave destination keys, models, HTML, helper and controls unchanged.

1. Complete the **energy** position and target. Energy Display should give a close, clear view of the panel face.
2. Complete the **mechanisms** position and target. Mechanisms Display should show the door and yellow hinge.
3. Complete the **entrance** position and target. Back to Entrance must restore an overview of both exhibits from either display.

Save and reload after editing. Inspect which coordinates change between views; do not merely rely on the status message.

## Verify

- Click Energy → Mechanisms → Entrance. Confirm the visible exhibit and camera readout at each step.
- Visit Energy then Entrance, and Mechanisms then Entrance. Both return routes must work.
- Repeat a destination: the view should remain stable.
- Reload, then use Tab and Enter to repeat the route without a mouse. Focus stays on the native button, with a visible outline.
- Displays stay fixed; only the camera viewpoint changes. These are instant viewpoint changes, not continuous movement or physical tracking.

## Submission

Push edited `student.js` to your fork. Upload one PDF with exactly three genuine, labelled screenshots:

1. **Energy Display:** panel view, selected-view status and camera readout.
2. **Mechanisms Display:** door view, selected-view status and camera readout.
3. **Entrance:** both displays in the overview, return status and visible keyboard focus on Back to Entrance.

Include your forked GitHub repository link inside the PDF. No new exhibits or decorative features are required. Screenshots show views; verify the actual buttons and return route in the running project.

## Credits and limits

Models are original procedural geometry. A-Frame 1.7.0 from https://aframe.io/releases/1.7.0/aframe.min.js is bundled with MIT licence in `vendor/AFRAME-LICENSE`; bundled dependency notices retained. Desktop virtual exhibition only: no claim of headset input, physical tracking or immersive comfort validation.
