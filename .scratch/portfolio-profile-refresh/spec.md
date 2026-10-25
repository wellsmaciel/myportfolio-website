## Problem Statement

Recruiters visiting the portfolio should quickly understand that the candidate is pursuing junior or graduate Full Stack Developer roles in Ireland, the UK, and remote roles that can be performed from Ireland. The current page gives prior financial work too much prominence, places project evidence late, lists planned learning instead of demonstrated skills, and loses section context while visitors scroll.

## Solution

Lead with the Full Stack direction and use senior IT support experience as evidence of troubleshooting and SaaS operations strengths. Put Projects immediately after About, replace Learning Path with skills supported by the displayed projects, retain the existing courses except XML and Mac Terminal, and make the navigation sticky, compact on small screens, theme-aware, keyboard-visible, and synchronized with scrolling.

## User Stories

1. As a recruiter hiring for a junior or graduate Full Stack role, I want the candidate's target role and location to be clear in the opening view so that I can assess fit quickly.
2. As a recruiter in Ireland or the UK, I want to know that the candidate is available for roles in those markets so that I can understand the intended job search.
3. As a recruiter hiring for remote work, I want the portfolio to clarify that remote roles can be performed from Ireland so that location expectations are clear.
4. As a recruiter, I want senior IT support experience presented as a strength alongside development work so that I can see evidence of troubleshooting, customer communication, and SaaS operations.
5. As a recruiter, I want project evidence immediately after About so that I can review practical development work early.
6. As a portfolio visitor, I want a skills section tied to visible projects so that listed technical competencies have concrete evidence.
7. As a visitor, I want the Shopping List API, Team Generator, Movie Discovery App, and postgraduate capstone to remain available so that I can inspect the candidate's range of work.
8. As an English-speaking visitor, I want the capstone's existing English language note to remain visible so that I understand it is currently in Portuguese and awaiting professor feedback and corrections before translation.
9. As a portfolio visitor, I want the current course list retained except for XML and Mac Terminal so that the education section reflects the approved selection.
10. As a visitor scrolling the portfolio, I want the navigation to remain available so that I can move between sections without returning to the top.
11. As a mobile visitor, I want the navigation to take little space when closed and remain easy to open and use so that content has room on a small screen.
12. As a keyboard user, I want visible focus on navigation links so that I can see which section I can open.
13. As a visitor, I want the hovered, focused, and current navigation item to use the same theme-specific accent as H2 headings so that navigation state is clear and consistent.
14. As a visitor scrolling through sections, I want the current navigation item to follow the section in view so that I know where I am.
15. As a visitor using either theme, I want the navigation accent and sticky menu to remain legible so that theme choice does not reduce usability.

## Implementation Decisions

- Keep the existing static HTML, CSS, Bootstrap navigation, and theme toggle.
- Lead with Junior / Graduate Full Stack Developer roles for Ireland, the UK, and remote work performable from Ireland.
- Present senior IT support and SaaS troubleshooting as a complementary strength; keep finance background brief.
- Move Projects directly after About.
- Replace Learning Path with demonstrated skills whose evidence is named in the existing project entries. Do not add unsupported competencies.
- Keep the locally edited course selection, including the removal of the XML and Mac Terminal courses.
- Preserve the capstone language note, the Team Generator URL, and the Movie Discovery App card and source link.
- Keep the navigation sticky on scroll and compact at small widths, with usable touch targets and a dismissible/collapsible mobile menu.
- Use the H2 theme token for navigation hover, keyboard focus, and current-section states.
- Track the active section from scrolling and expose the state accessibly.
- Do not include Blog work.

## Testing Decisions

- Use the rendered portfolio as the main seam: inspect the opening hierarchy, section order, course selection, project preservation, and navigation at desktop and narrow mobile sizes.
- Exercise the theme toggle, keyboard focus, mobile menu, section links, and scroll-driven active state in the browser.
- Do not add an automated test harness for this static content and CSS interaction change.

## Out of Scope

- Changes to Blog or any external repository.
- Changes to the existing project apps, their deployments, or repository names.
- New claims about skills, qualifications, or employment beyond the supplied glossary and existing portfolio content.
- Removing or changing the existing project links and capstone language note.

## Further Notes

- The portfolio's browser-visible page is the verification seam; the user explicitly requested a visual review.
- The initial working tree contained local edits to the course list, Movie Discovery card, and professional profile links. Preserve those edits.
