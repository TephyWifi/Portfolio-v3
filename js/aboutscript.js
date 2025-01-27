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
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    slides.forEach(slide => slide.style.display = "none");
    dots.forEach(dot => dot.classList.remove("active"));

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
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