// this script registers that you have visited this page
// and that next time you open the root index
// it should immediately load up the actual website

document.getElementById("continueLink").addEventListener("click", function()
{
    localStorage.setItem("hasContinued", "true");
});