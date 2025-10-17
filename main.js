//Theme toggle switch Button
const themeButton = document.getElementById ("theme-button")

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


/* Old Button
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("Dark");

    if (document.body.classList.contains("Dark")) {
        themeButton.textContent = "☀️ Light"
    } else {
        themeButton.textContent = "🌙 Dark"
    }
});
*/







