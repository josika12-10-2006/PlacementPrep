# PlacementPrep

A timed multiple-choice practice app for campus placement prep — quantitative aptitude, logical reasoning, verbal ability, technical MCQs, and HR/behavioral rounds — built with vanilla HTML, CSS, and JavaScript (no frameworks, no build step).

## Features

- **5 practice rooms**, 15 questions each (75 total), covering the rounds most common in campus placement drives.
- **Daily rotating question sets** — each room serves 10 questions a day, picked and ordered by a deterministic date-based seed. The set is stable if you retry the same day, and refreshes automatically the next day.
- **Timed rounds** — a 20-second countdown per question, with a visual warning state as time runs low.
- **Live scoring and progress tracking** during the quiz.
- **Results & review screen** — per-question breakdown showing your answer vs. the correct one, plus accuracy and time taken.
- **Streak and best-score tracking**, persisted locally in the browser via `localStorage`.
- Custom UI design (an "exam hall" visual concept, with the question card styled like a paper OMR answer sheet) — no CSS framework.

## Tech

- Plain HTML/CSS/JS — no dependencies, no build tools.
- Deterministic PRNG (`mulberry32`) seeded from the date + room ID to drive daily question rotation reproducibly.
- State handled with a single in-memory `state` object; persistence handled via `localStorage`.

## Running it

Just open `index.html` in a browser — no server or install required.

```
placementprep/
├── index.html
├── style.css
└── script.js
```

## Possible extensions

- Add more categories or expand each question bank.
- Add a difficulty setting or adaptive difficulty based on past accuracy.
- Sync scores across devices with a lightweight backend.
