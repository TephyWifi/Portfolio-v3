// Navbar
function toggleNav() {
    var element = document.getElementById("myOverlaynav")
    var shown = element.getAttribute("data-isshown");
    if (shown == "true") {
        element.setAttribute("data-isshown", "false");
        element.style.width = "0";
    }
    else {
        element.setAttribute("data-isshown", "true");
        element.style.width = "100%";
    }
}


function switchMode() {
    document.getElementById("switchMode");
    let element = document.body;
    element.classList.toggle("switchmode");
}
