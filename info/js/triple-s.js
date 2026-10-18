let keys = [];

const code =
[
    "ArrowUp","ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a", "Enter"
];

document.addEventListener("keydown", function(e)
{
    // verify it does anything
    console.log(e.key);

    keys.push(e.key);
    keys = keys.slice(-code.length);

    if (keys.join() === code.join())
        window.location.href = "/.sss/1ab1add8-80f1-48e0-ad71-7ea4cf3e41b9/index.html"
});