# tTarot 🔮

A mystical tarot reading experience for the terminal. Built with [Ink 6](https://github.com/vadimdemedes/ink), React 19, and [ink-playing-cards](https://github.com/gfargo/ink-playing-cards).

## Stack

- **Ink 6** — React renderer for the terminal
- **React 19** — component-based UI
- **ink-playing-cards** — TarotCard components, 78-card deck, DeckProvider
- **TypeScript** — type safety with `react-jsx` transform
- **AVA** — concurrent test runner with `tsx` loader
- **XO + Prettier** — linting and formatting

## Getting Started

```bash
yarn install
yarn dev       # watch mode
yarn start     # run the CLI
yarn test      # run tests
yarn typecheck # type-check
yarn lint      # lint and format
```

## Requirements

- Node.js >= 22

---

## Roadmap

### v1.0 — Core Experience

The core loop: launch → choose spread → shuffle → reveal cards → read interpretations.

#### Welcome Screen
- Mystic ASCII art title ("tTarot")
- Brief intro text, atmospheric purple/gold/cyan palette
- "Press Enter to begin" prompt
- Alternate screen mode for a clean full-terminal experience

#### Spread Selection
- Arrow key navigation to pick a reading type:
  - **Single Card** — daily pull / quick answer
  - **Three Card** — Past / Present / Future
  - **Celtic Cross** — 10-card deep reading
  - **Yes/No** — single card, binary interpretation

#### Question Input (Optional)
- Before drawing, user is prompted: type a question or hold it in mind
- Press Enter to skip or submit
- Question displayed in the reading summary

#### Shuffle & Draw
- Animated shuffle sequence using `useDeck().shuffle()`
- Cards dealt face-down into the spread layout
- Visual feedback during shuffle (card-flipping animation)

#### Card Reveal
- Cards revealed one at a time via Enter / arrow keys
- `TarotCard` component with `faceUp` toggling
- Reversed cards shown with `reversed` prop (configurable, see Settings)

#### Reading / Interpretation
- After each card flip, show the card's meaning in a styled panel beside/below the card
- Positional meaning displayed (e.g., "Position 1: The Past")
- Upright vs reversed interpretations from built-in data for all 78 cards

#### Summary View
- Full spread visible with combined reading narrative
- All cards, positions, and interpretations at a glance

#### Tarot Dictionary / Appendix
- Browse all 78 cards in a searchable/scrollable list
- Card rendered on the left, full description in a scrollable panel on the right
- Filter by Major/Minor Arcana, by suit
- View upright and reversed meanings for any card

#### Settings
- **Reversed cards**: enable/disable reversed cards appearing in readings
- Accessible from the main menu

#### Navigation
- Keyboard-driven throughout: arrow keys, Enter, Escape to go back, q to quit
- Consistent header bar with current screen title

### v1.0 — Technical Architecture

```
src/
├── cli.tsx                — entry point, meow CLI, render with alternateScreen
├── app.tsx                — root component, screen router
├── screens/
│   ├── welcome.tsx        — title screen
│   ├── spread-select.tsx  — choose spread type
│   ├── reading.tsx        — shuffle → draw → reveal → interpret
│   ├── summary.tsx        — full reading overview
│   └── dictionary.tsx     — tarot card appendix / browser
├── components/
│   ├── header.tsx         — app header bar
│   ├── spread-layout.tsx  — positions cards per spread type
│   ├── card-meaning.tsx   — interpretation panel
│   └── question-input.tsx — text input for querent's question
├── data/
│   └── interpretations.ts — 78 card meanings (upright + reversed)
├── hooks/
│   └── use-reading.ts     — reading state machine
├── types.ts               — app types (Spread, Reading, Settings, etc.)
└── utils/
    └── spreads.ts         — spread definitions (positions, labels, card count)
```

### v2.0 — Persistence & History

- **Save readings** — write readings to `~/.ttarot/` as JSON
- **Reading history** — browse past readings with arrow keys
- **Journaling** — add personal notes to saved readings

### v3.0 — Nice-to-Haves

- **Daily card** — `ttarot --daily` mode, single card pull
- **Daily notification** — card of the day on shell open
- **Custom themes** — deck color overrides via `borderColor`/`artColor`
- **Spread builder** — define and save custom spread layouts
- **Export** — export readings as markdown or plain text

---

## License

MIT
