/*

let darkMode: boolean = true;

const button = document.getElementById("toggleTheme")!;

const savedTheme = localStorage.getItem("theme");

if (savedTheme == "dark") {
    darkMode = true;
    document.body.classList.add("dark");
}

// huh, didnt' how javascript had lambda
button.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light"); 
    }
});

*/