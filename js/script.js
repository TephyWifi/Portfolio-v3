// Navbar


function toggleNav() {
    var element = document.getElementById("myOverlaynav")
    var shown = element.getAttribute("data-isshown");
    if (shown == "true") {
        element.setAttribute("data-isshown", "false");
        element.style.width = "0";
        document.querySelector('#myMenu').textContent = 'MENU';
    }
    else {
        element.setAttribute("data-isshown", "true");
        element.style.width = "100%";
        document.querySelector('#myMenu').textContent = 'CLOSE';
    }
}

// Darkmode
function switchMode() {
    document.getElementById("switchMode");
    let element = document.body;
    element.classList.toggle("switchmode");
}
