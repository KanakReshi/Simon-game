# Simon Says

A browser-based Simon game with a futuristic arcade-style interface. The player watches a growing sequence of colored pads, memorizes the pattern, and repeats it in the correct order to advance through levels.

## Overview

This project is a lightweight front-end game built with plain HTML, CSS, and JavaScript. It does not require a build step, package manager, or framework, which makes it easy to run locally and simple to understand for beginners learning DOM manipulation and event-driven logic.

The UI uses a neon HUD-inspired visual style, responsive layouts for smaller screens, and animated feedback for sequence flashes, user clicks, and game-over states.

## Features

- Classic Simon memory gameplay
- Keyboard-triggered game start
- Increasing difficulty as each level adds one new step
- Visual pad flash for Simon's sequence
- Separate visual feedback for player input
- Game-over screen flash and score display
- Responsive layout for desktop, tablet, and mobile
- No dependencies or build tools required

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
.
├── LICENSE
├── README.md
├── simon.css
├── simon.html
└── simon.js
```

## How to Run Locally

Because this is a static project, you can run it directly in the browser.

### Option 1: Open the HTML file directly

1. Clone or download this repository.
2. Open `simon.html` in your browser.

### Option 2: Serve it with a local HTTP server

Using a local server is a good habit for front-end projects.

If you have Python installed:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/simon.html
```

## How to Play

1. Press any key to start the game.
2. Watch the highlighted color sequence carefully.
3. Repeat the sequence by clicking the colored pads in the same order.
4. Each successful round adds one more step to the pattern.
5. If you make a mistake, the game ends and your score is shown.
6. Press any key again to restart from level 1.

## Implementation Summary

### HTML

The markup defines:

- A hero card layout for the game content
- A status heading that shows the current game state
- A 2x2 color pad board
- A small gameplay tips section

### CSS

The stylesheet provides:

- A futuristic neon/HUD visual theme
- Custom color tokens with reusable CSS variables
- Hover, flash, and game-over animations
- Responsive sizing for tablets and phones
- Performance-conscious effects focused on transforms and opacity

### JavaScript

The game logic handles:

- Tracking Simon's generated sequence
- Tracking the user's current input sequence
- Starting the game from a keyboard event
- Advancing levels
- Flashing pads for both game and user actions
- Comparing user input with the expected pattern
- Resetting game state after a failed round

## Current Behavior Notes

These notes reflect the current code in the repository:

- The game starts on a keyboard press, not with a visible start button.
- Input is handled through mouse clicks on the colored pads.
- The displayed score on game over is based on the current `level` value.
- The random color selection logic currently uses only part of the available button array, so one color may not be chosen during sequence generation unless the logic is updated.

## Learning Value

This project is a solid practice piece for learning:

- DOM selection and event listeners
- Arrays and sequence comparison
- Timers with `setTimeout`
- Dynamic UI updates
- Separating structure, styles, and logic across files

## Possible Improvements

Here are some good next steps if you want to expand the project:

- Fix the random selection range so all four colors can appear
- Add sound effects for each pad
- Support touch and keyboard pad controls
- Add a visible start/restart button
- Track and store a high score
- Add strict mode or difficulty settings
- Improve accessibility with semantic buttons and ARIA labels
- Add unit tests or end-to-end browser tests

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
