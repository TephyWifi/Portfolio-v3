

// Navbar
const element = document.getElementById("myMenu");
element.addEventListener("click", function toggleNav() {
    let element = document.getElementById("myOverlaynav");
    let shown = element.getAttribute("data-isshown");
    element.addEventListener("click", toggleNav);
    
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
});

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("darkIcon");
    button.addEventListener("click", () => {
        document.getElementById("darkIcon");
        let element = document.body;
        element.classList.toggle("switchmode")
    });
});