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

document.getElementById("contactForm").addEventListener("sumbit", function (event) {
    event.preventDefault();

    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(el => el.style.display = "none");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    if (name === '') {
        document.getElementById("nameError").textContent = "Name is required";
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Valid email is required";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    if (message === '') {
        document.getElementById("messageError").textContent = "Message is required";
        document.getElementById("messageError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Thank you for reaching out!")
    }
});

