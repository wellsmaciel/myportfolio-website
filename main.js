const themeButton = document.getElementById('theme-button');
const htmlFile = document.documentElement;

themeButton.addEventListener('click', function () {
  let currentTheme = htmlFile.getAttribute('color-mode');

  if (currentTheme === 'light') {
    htmlFile.setAttribute('color-mode', 'dark');
  } else {
    htmlFile.setAttribute('color-mode', 'light');
  }
});
