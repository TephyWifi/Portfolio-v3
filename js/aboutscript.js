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
    const body = document.body;

    if (localStorage.getItem("darkmode") === "enabled") {
        body.classList.add("switchmode");
    }

    button.addEventListener("click", () => {
        body.classList.toggle("switchmode");

        if (body.classList.contains("switchmode")) {
            localStorage.setItem("darkMode", "enabled");
        }
        else {
            localStorage.setItem("darkmode", "disabled");
        }
        // document.getElementById("darkIcon");
        // let element = document.body;
        // element.classList.toggle("switchmode")
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");
    
    if (n > slides.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = slides.length;} 

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].classList.add("active");
}

document.querySelector(".slideshow-container").addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("prev")) {
        plusSlides(-1);
    }
    else if (target.classList.contains("next")) {
        plusSlides(1);
    }
});

document.querySelector(".dot-container").addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("dot")) {
        const slideIndex = parseInt(target.getAttribute("data-slide"));
        currentSlide(slideIndex);
    }
});