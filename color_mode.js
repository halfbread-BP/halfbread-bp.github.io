/// GENERATED SCRIPT FROM TYPESCRIPT

var darkMode = false;
var button = document.getElementById("toggleTheme");
// huh, didnt' how javascript had lambda
button.addEventListener("click", function () {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.classList.add("dark");
    }
    else {
        document.body.classList.remove("dark");
    }
});
