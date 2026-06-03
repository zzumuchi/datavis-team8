# Is AI Really Stealing Your Job?

An interactive data storytelling project that explores how AI is reshaping the job market.

## Overview

This project answers the question "Will AI take my job?" through data. It visualizes employment shifts from the Industrial Revolution to today, real-world AI adoption trends, and automation risk scores across 974 occupations.

## Structure

A scroll-driven narrative across 15 sections.

| Section | Content |
|---------|---------|
| S1 | Hero — the central question |
| S2 | Racing bar chart — employment by industry, 1800–2024 |
| S3 | Transition — "Jobs disappearing?" vs "Tasks changing?" |
| S4 | Word cloud — a job is a bundle of tasks |
| S5 | Heatmap — 25 occupations × 30 task types |
| S6 | Interactive heatmap + radar chart — explore task profiles by occupation |
| S7 | Treemap — task types with the highest AI usage share |
| S8–S9 | Diverging bar chart — automation (replacement) vs augmentation (collaboration) |
| S10 | Part 3 transition — real employment data |
| S11 | Line chart — AI adoption index vs total employment index (2022–2025) |
| S12 | Bubble chart — task composition vs employment growth |
| S13–S14 | Conclusion — reframing the question |
| S15 | Interactive diagnostic — search 974 occupations, see automation / augmentation / stable breakdown |

## Tech Stack

- **D3.js v7** — racing bar, treemap, diverging bar, line chart
- **Chart.js 4** — radar chart, bubble chart
- **Plotly 2** — heatmap
- Vanilla HTML / CSS / JS (no build tools)

## Running Locally

No installation needed. Open `index.html` directly in a browser.

```bash
open index.html
```

## Data Sources

- BLS (Bureau of Labor Statistics) — industry employment time series, occupation wages and employment size
- O\*NET — occupation task characteristics and importance scores
- Stanford HAI / Goldman Sachs — AI adoption index

## Key Insights

- AI adoption has surged, yet the overall employment index has barely moved.
- Augmentation (AI working alongside humans) is far more prevalent than automation (AI replacing humans).
- High-risk occupations skew toward repetitive and clerical tasks; resilient ones skew toward interpersonal and cognitive work.
