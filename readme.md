# tTarot 🔮

A mystical tarot reading experience for the terminal. Built with [Ink 6](https://github.com/vadimdemedes/ink), React 19, and [ink-playing-cards](https://github.com/gfargo/ink-playing-cards).

## Features

### Interactive Readings

Choose from 4 spread types — Single Card, Three Card (Past/Present/Future), Celtic Cross (10 cards), or Yes/No — then shuffle, reveal cards one at a time, and read their interpretations. Optionally type a question before drawing or hold it in your mind.

Reversed cards appear with ~50% probability (toggleable in Settings) and show distinct reversed interpretations.

### Daily Card

```bash
ttarot --daily    # or ttarot -d
```

Draws a single card of the day and exits. The same card is shown all day (cached in `~/.ttarot/daily.json`). Non-interactive output — add it to your `.bashrc` or `.zshrc` for a card on every shell open.

### Tarot Dictionary

Browse all 78 cards (22 Major Arcana + 56 Minor Arcana) in a windowed, scrollable list. Filter by Major Arcana or suit (Wands, Cups, Swords, Pentacles). Each card renders alongside its full upright and reversed meanings. Press `r` to toggle between them.

### Reading Summary

After a reading, browse through each card's position, meaning, and interpretation with arrow keys. Works for all spread sizes including the 10-card Celtic Cross.

## Getting Started

```bash
yarn install

# Interactive mode
yarn start

# Daily card
npx tsx src/cli.tsx --daily

# Development
yarn dev        # watch mode
yarn test       # run tests
yarn typecheck  # type-check
yarn lint       # lint and format
```

## Requirements

- Node.js >= 22

## Stack

- [Ink 6](https://github.com/vadimdemedes/ink) — React renderer for the terminal
- [React 19](https://react.dev) — component-based UI
- [ink-playing-cards](https://github.com/gfargo/ink-playing-cards) — TarotCard components, 78-card deck, DeckProvider
- TypeScript, AVA, XO + Prettier

## Project Structure

```text
src/
├── cli.tsx                — entry point, meow CLI with --daily flag
├── app.tsx                — root component, screen router
├── daily.tsx              — daily card logic (cache, seeded random, static render)
├── screens/
│   ├── welcome.tsx        — title screen
│   ├── spread-select.tsx  — choose spread type
│   ├── reading.tsx        — shuffle → draw → reveal → interpret
│   ├── summary.tsx        — reading overview with card browser
│   ├── dictionary.tsx     — tarot card appendix / browser
│   └── settings.tsx       — toggle reversed cards
├── components/
│   ├── header.tsx         — app header bar
│   ├── viewport.tsx       — fixed-height terminal viewport
│   ├── card-meaning.tsx   — interpretation panel
│   └── question-input.tsx — text input for querent's question
├── data/
│   └── interpretations.ts — 78 card meanings (upright + reversed + keywords)
├── types.ts               — app types (Spread, Reading, Settings, etc.)
└── utils/
    └── spreads.ts         — spread definitions (positions, labels, card count)
```

## Controls

| Key | Action |
|---|---|
| ↑ ↓ | Navigate lists, browse cards |
| ← → | Switch filters (dictionary) |
| Enter | Select, reveal card, confirm |
| Esc | Go back |
| q | Quit |
| d | Dictionary (from welcome) |
| s | Settings (from welcome) |
| r | Toggle reversed (dictionary) |
| PgUp/PgDn | Jump through lists |

## Roadmap

- [x] Interactive readings (Single, Three Card, Celtic Cross, Yes/No)
- [x] Optional question input
- [x] Shuffle animation and card-by-card reveal
- [x] 78-card interpretation database (upright + reversed)
- [x] Reading summary with card browser
- [x] Tarot Dictionary with filters and card preview
- [x] Settings (reversed cards toggle)
- [x] Daily card of the day (`--daily` flag)
- [x] Fixed-height viewport with consistent layout
- [ ] Save readings to `~/.ttarot/` as JSON
- [ ] Reading history browser
- [ ] Journaling — personal notes on saved readings
- [ ] Custom color themes
- [ ] Spread builder — define custom spread layouts
- [ ] Export readings as markdown or plain text
- [ ] Daily card auto-trigger on shell open

## License

MIT
---

## License

MIT
