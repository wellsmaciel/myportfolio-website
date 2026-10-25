## Problem Statement

Recruiters can identify the candidate's target role and see project links, but the portfolio gives little immediate path to contact, makes links and actions look alike, and presents projects mostly as text. The course list also draws attention away from practical project evidence.

## Solution

Make contacting the candidate easy from the opening view, distinguish primary actions from ordinary links, and add a subtle desktop-only boundary between the last navigation link and the theme control. Present the existing projects as clearer, scannable evidence using verified features, technology, and destinations; add screenshots only when an authentic capture is available. Reduce the visual weight of the course list without removing any previously approved courses.

## User Stories

1. As a recruiter, I want a clear contact action in the opening view so that I can reach the candidate without searching the whole page.
2. As a recruiter, I want the hero to focus on role and contact instead of repeating location details so that the opening message stays concise.
3. As a recruiter, I want contact actions to be visually distinct from project and profile links so that I can predict what each click will do.
4. As a desktop visitor, I want the theme control visually separated from the section links so that navigation and display settings read as different groups.
5. As a mobile visitor, I want the compact sticky header to remain uncluttered so that the theme control and expandable menu stay easy to use.
6. As a keyboard user, I want the contact action and other controls to have visible focus and clear accessible names so that I can navigate without a mouse.
7. As a recruiter, I want to see visual evidence of the candidate's strongest projects so that I can assess practical work quickly.
8. As a reviewer, I want project descriptions to distinguish verified features and the candidate's contribution from assumptions so that the portfolio stays credible.
9. As a visitor, I want project links to remain available so that I can open the deployed applications or source repositories.
10. As an English-speaking visitor, I want the capstone's existing language notice to remain unchanged so that its current availability is clear.
11. As a recruiter, I want practical project evidence to take visual priority over course history so that I can judge applied skills first.
12. As a visitor, I want the full approved course and certification list to remain available so that I can still review the candidate's learning history.
13. As a mobile visitor, I want project evidence and course information to reflow cleanly so that neither requires horizontal scrolling.
14. As a visitor using either color theme, I want actions, links, focus, and the navigation divider to remain legible and consistent.
15. As the portfolio owner, I want Blog content and unsupported claims to remain out of this update so that the scope and professional story stay accurate.

## Implementation Decisions

- Keep the current static page, Bootstrap navigation, theme support, and existing project destinations.
- Keep the hero focused on role and experience; use the sticky navigation's Contact link to reach the existing form.
- Remove the hero's repeated location-availability sentence while retaining the target-market detail in About.
- Style primary actions separately from ordinary project and profile links. Keep all controls keyboard-visible and usable as touch targets.
- On desktop, separate the final section link and theme control with a subtle vertical rule. Hide the rule at the compact-navigation breakpoint.
- Present project evidence in scannable cards with verified features, technology, and destinations. Screenshots are optional and may be used only when captured from the actual project pages or verified local artifacts; do not add stock, generated, or placeholder imagery.
- Use the existing project descriptions and verified project behavior. Do not invent contribution, outcome, or impact claims; where ownership is not established, describe the visible project behavior only.
- Preserve every current project, destination, the Team Generator URL, the Movie Discovery App card, and the capstone language note.
- Retain all previously approved courses and certifications while reducing their visual prominence relative to project evidence.
- Keep the change limited to the portfolio; do not include the Blog.

## Testing Decisions

- Use the rendered portfolio as the primary verification seam at desktop and mobile widths.
- Verify the hero contact action reaches the existing form, project links remain intact, all course entries remain accessible, and there is no horizontal overflow.
- Exercise the theme control, keyboard focus, mobile menu, desktop divider visibility, and link/action states in both themes.
- Review rendered project screenshots against their source pages for accuracy. If a project cannot be reached or no verified visual exists, do not add an image for it.
- No automated test framework exists for this static UI. Do not add one for this change; use browser review and source diff review.

## Out of Scope

- Removing or rewriting any approved course or certification.
- Adding résumé, email, or project outcome claims that have not been supplied or verified.
- Blog changes, external project changes, new deployments, or replacing existing URLs.
- A full visual redesign, unrelated color-theme changes, or a new CSS framework.
- Committing changes or opening a pull request in this round.

## Further Notes

- The initial working tree contains user changes in the portfolio files and untracked context files. Preserve them.
- The desktop-only divider is a visual separator between navigation and the theme control, not a text character in a menu label.
- The course section becomes visually secondary but retains the full list.
- The implementation uses text-first project cards because no verified project screenshot assets were available in the repository.
- The user approved the rendered-page verification seam and the three-ticket breakdown before implementation.
- The user approved removing the repeated location-availability sentence from the hero while keeping it in About.
- The user requested removal of the hero Contact me button; the sticky navigation remains the contact path.
