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

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length} ;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { 
        dots[i].classList.remove("slideractive");
    }
    
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].classList.add("slideractive");
}