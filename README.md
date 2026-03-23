# Simon Says

<p align="center">
  A neon-styled memory challenge built with pure HTML, CSS, and JavaScript.
</p>

<p align="center">
  <a href="https://simon-game-oh1d.vercel.app/"><strong>Live Demo</strong></a>
</p>

---

## Overview

**Simon Says** is a fast, browser-based memory game where each round adds a new color to the pattern. Your job is simple: watch the sequence, remember it, and repeat it without slipping up.

This version leans into a futuristic arcade feel with glowing pads, animated feedback, and a bold HUD-inspired interface. It is lightweight, responsive, and built without any frameworks or dependencies. You can play the deployed version here: **https://simon-game-oh1d.vercel.app/**.

## Live Site

Play it here:

**https://simon-game-oh1d.vercel.app/**

## Highlights

- Futuristic neon arcade UI
- Classic Simon memory gameplay
- Smooth visual feedback for game sequence and player clicks
- Increasing difficulty every round
- Responsive layout for desktop and mobile
- Zero dependencies
- Beginner-friendly codebase

## Tech Stack

```text
HTML5
CSS3
Vanilla JavaScript
```

## Preview

The game features:

- A cinematic hero-card layout
- Four glowing color pads
- A central HUD-inspired core
- Animated level status text
- Flash and fail-state effects for stronger game feel

## How to Play

1. Press any key to start the game.
2. Watch the color that flashes.
3. Click the pads in the exact same order.
4. Every new level adds one more step to the sequence.
5. One wrong move ends the run.
6. Press any key again to restart.

## Run Locally

This is a static front-end project, so there is no build step.

### Open directly

Open [index.html](/home/kanak/Simon-game/index.html) in your browser.

### Or serve it locally

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Project Structure

```text
.
├── LICENSE
├── README.md
├── index.html
├── simon.css
└── simon.js
```

## How It Works

### `index.html`

Defines the page structure, game board, heading text, and supporting UI sections.

### `simon.css`

Handles the entire visual identity of the game, including:

- Color themes
- Layout
- Responsive design
- Hover effects
- Flash states
- Game-over screen styling

### `simon.js`

Controls the core game logic:

- Starts the game on keypress
- Generates the random Simon sequence
- Stores the player's input
- Compares user clicks with the expected pattern
- Levels up after a correct round
- Resets the game after a wrong move

## Current Notes

These points reflect the current implementation:

- The game starts with a keyboard press.
- The pads are clicked with the mouse.
- The project is fully front-end and does not use a backend.
- The random color selection logic currently does not use all four colors consistently, so one color may be skipped unless that logic is fixed.

## Why This Project Is Cool

- It is simple enough to understand quickly.
- It still feels polished and visually expressive.
- It is a strong beginner project for practicing DOM logic and UI feedback.
- It is easy to deploy anywhere because it is just static files.

## Ideas for Future Upgrades

- Add sound effects for each color
- Add a visible start button
- Add high-score tracking with local storage
- Add difficulty modes
- Add touch-friendly interactions
- Improve accessibility with semantic buttons and ARIA labels
- Add animations between rounds

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
