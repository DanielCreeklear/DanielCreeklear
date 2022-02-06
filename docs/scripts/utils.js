function switchDisplay(element)
{
    var display = document.getElementById(element).style.display;
    if (display == "none")
    {
        document.getElementById(element).style.display = "block";
    } else
    {
        document.getElementById(element).style.display = "none";
    }
}