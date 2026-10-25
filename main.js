const themeButton = document.getElementById('theme-button');
const root = document.documentElement;

themeButton?.addEventListener('click', () => {
  const currentTheme = root.getAttribute('color-mode');
  root.setAttribute('color-mode', currentTheme === 'light' ? 'dark' : 'light');
});

const navLinks = [...document.querySelectorAll('.navbar-custom .nav-link[href^="#"]')];
const navCollapse = document.getElementById('navbarNav');
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function setCurrentSection(sectionId) {
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute('href') === `#${sectionId}`;
    link.classList.toggle('active', isCurrent);

    if (isCurrent) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);

      if (visibleSections.length > 0) {
        setCurrentSection(visibleSections[0].target.id);
      }

      const isAtPageEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (isAtPageEnd && sections.length > 0) {
        setCurrentSection(sections[sections.length - 1].id);
      }
    },
    { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setCurrentSection(link.getAttribute('href').slice(1));

    if (navCollapse?.classList.contains('show') && window.bootstrap?.Collapse) {
      window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    }
  });
});
