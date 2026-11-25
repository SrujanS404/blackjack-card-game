# Black Jack

A small browser-based blackjack-style card game built with plain HTML, CSS, and JavaScript. It renders a player's cards and running total, and lets the player draw again or clear the current round display.

## Project at a glance

- **Type:** Static front-end project
- **Technologies:** HTML, CSS, vanilla JavaScript
- **Dependencies/build tools:** None
- **Entry point:** `index.html`

## Run the game

1. Download or clone this project.
2. Open `index.html` in a modern web browser.
3. Select **START GAME** to draw the opening two values.
4. Select **NEW CARD** to draw another value while the total is below 21.
5. Select **CASH OUT** to clear the displayed hand and total.

There is no install or compilation step. A local static web server can also serve the project if preferred; keep the HTML, JavaScript, stylesheet, and image asset together so their relative paths resolve.

## How a round works

The game keeps a list of drawn values in `Cards` and a running total in `sum`.

- **START GAME** calls `renderGame()` once per round, drawing two random values, adding them to the total, and updating the page. The button is disabled until **CASH OUT** resets the round.
- **NEW CARD** draws one more value when `sum` is less than 21. At 21 or above, the function returns without drawing.
- The result message is selected by `func(sum)`: below 21 asks whether to draw again, exactly 21 reports blackjack, and above 21 reports that the player is out.
- **CASH OUT** calls `resetCard()`, which empties the card list, sets the total to zero, and restores the round labels.
- The player label is initialized from the `player` object in `index.js`; it currently shows the hard-coded name `Srujan` and chip balance `$200`.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, game text, buttons, and script/style references. |
| `index.js` | Player data, random draws, round state, button actions, and display updates. |
| `style.css` | Page layout, typography, buttons, and background image styling. |
| `images.jpg` | Background image loaded by `style.css`. |

## Code tour

### HTML (`index.html`)

The page contains result, cards, sum, and player text elements. The three buttons call the global JavaScript functions `StartGame()`, `newCard()`, and `resetCard()` through inline click handlers. The page loads `style.css` in the document head and `index.js` near the end of the body.

### JavaScript (`index.js`)

The `player` object stores the displayed name and chip count. `cardset` is the range used for random draws. The `random()` function pushes a value into `Cards`; `renderGame()` starts a hand; `newCard()` handles an additional draw; `func()` chooses the result text; and `resetCard()` clears the hand display and total.

### CSS (`style.css`)

The stylesheet uses `images.jpg` as a cover-sized page background, centers the text, and formats the title and game controls. The controls are arranged vertically in a centered flex column.

## Current implementation notes

This is a learning/demo version of blackjack, rather than a full casino rules implementation:

- Each draw is an independent random integer from **1 through 13**. There is no physical deck, suit, card face, or prevention of duplicate cards.
- An ace is not treated flexibly as 1 or 11, face cards are not given a blackjack value of 10, and the player can win only by reaching exactly 21.
- There is no dealer hand, wager, payout, or actual chip balance update; `CASH OUT` currently clears the hand display and sum.
- The **START GAME** button is disabled after the first click and is re-enabled by **CASH OUT**, which resets the hand and round state.
- The game does not disable controls or display a separate round state after a bust or blackjack.

These details are useful starting points if you want to extend the project with proper deck/rank handling, dealer turns, betting, and more explicit round-state management.
