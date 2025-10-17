const themeButton = document.getElementById ("theme-button")


themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️ Light"
    } else {
        themeButton.textContent = "🌙 dark"
    }
});


//document.body.classList.toggle("dark"); change it to "dark" manually to test it


