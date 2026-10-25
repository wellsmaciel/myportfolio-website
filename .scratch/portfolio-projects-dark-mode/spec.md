## Problem Statement

The portfolio's projects section does not link to the current Team Generator deployment or showcase the user's postgraduate capstone app. Visitors also cannot tell that the capstone is currently Portuguese-only and awaiting the professor's corrections before translation. The existing dark palette is ready for a considered color refresh.

## Solution

Update the Team Generator link, add the capstone app with an English note explaining its language and translation status, and refine the dark-mode colors while preserving the existing theme toggle and light theme.

## User Stories

1. As a portfolio visitor, I want to open the current Team Generator app so that I can try the project.
2. As a portfolio visitor, I want to discover the capstone app so that I can explore the user's postgraduate work.
3. As an English-speaking visitor, I want to know the capstone app is currently in Portuguese so that I understand its language before opening it.
4. As a portfolio visitor, I want the capstone note to explain that an English translation is pending the professor's corrections so that I understand why an English version is not yet available.
5. As a portfolio visitor, I want project links to open safely in a new tab so that I can explore them without losing my place in the portfolio.
6. As a visitor who prefers dark mode, I want a cohesive dark palette with clear text and distinct accents so that the portfolio is comfortable to read.
7. As a portfolio visitor, I want the existing theme button to continue switching between light and dark modes so that I can compare both palettes.
8. As a portfolio visitor, I want the light theme to retain its current appearance so that this update does not disrupt my preferred mode.

## Implementation Decisions

- Keep the existing projects section and its plain HTML structure.
- Set the Team Generator link to the newly supplied deployment URL: `https://wellsmaciel.github.io/team-generator/`.
- Add the capstone app using `https://frontend-production-dd49.up.railway.app/`.
- Explain in English that the app is currently in Portuguese and that translation is pending the professor's feedback and corrections.
- Refresh only the dark-mode palette toward slate/navy surfaces, light text, and gold/coral accents. Keep the current light palette and theme toggle behavior.
- Keep external project links opening in a new tab with the existing safe `rel` attributes.

## Testing Decisions

- Use the browser-visible portfolio as the public seam: inspect project names, links, the English language note, and the rendered dark palette; use the theme button to switch between dark and light modes.
- This static portfolio has no existing automated test harness. No automated tests are needed for this content and CSS change.
- Verify both project URLs and confirm the theme button still switches modes.

## Out of Scope

- Translating the capstone application itself.
- Changing the capstone app or waiting for/obtaining professor feedback.
- Redesigning the project section or changing other portfolio sections.
- Changing the light-mode colors or adding theme persistence.

## Further Notes

- The user approved two independent tickets: one for project links and one for the dark-mode palette.
