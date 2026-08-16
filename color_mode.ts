let darkMode: boolean = false;

const button = document.getElementById("toggleTheme")!;

// huh, didnt' how javascript had lambda
button.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
    }
});