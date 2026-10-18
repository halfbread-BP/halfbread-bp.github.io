// this script just changes the stored value that dictates whether dark mode is on or not

var darkMode = true;

var button = document.getElementById("toggleTheme");
var savedTheme = localStorage.getItem("theme");

if (savedTheme == "dark")
{
    darkMode = true;
    document.body.classList.add("dark");
}

// huh, didnt' how javascript had lambda
button.addEventListener("click", function()
{
    darkMode = !darkMode;

    if (darkMode)
    {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    else
    {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});