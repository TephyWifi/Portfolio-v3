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

// Darkmode
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("darkIcon");
    const body = document.body;

    if (localStorage.getItem("darkmode") === "enabled") {
        body.classList.add("switchmode");
    }

    button.addEventListener("click", () => {
        body.classList.toggle("switchmode");

        if (body.classList.contains("switchmode")) {
            localStorage.setItem("darkmode", "enabled");
        }
        else {
            localStorage.setItem("darkmode", "disabled");
        }
    });
});