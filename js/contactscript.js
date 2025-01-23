const element = document.getElementById("myMenu");
element.addEventListener("click", function toggleNav() {
    let element = document.getElementById("myOverlaynav");
    let shown = element.getAttribute("data-isshown");
    // element.addEventListener("click", toggleNav);

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

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(el => el.style.display = "none");

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
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


// Mood Buttons
let inputField = document.getElementById("myInput");
let moodList = [];

function showMood() {
    const ul = document.getElementById("myUL");
    ul.innerHTML = '';

    moodList.forEach(mood => {
        let li = document.createElement("li");
        li.textContent = mood;
        ul.appendChild(li);
    });
}

document.getElementById("moodBox").addEventListener("click", function (event) {
    console.log("Button clicked:", event.target);
    let target = event.target;

    if (target.classList.contains("unshift-button")) {
        let mood = inputField.value.trim();
        if (mood !== '') {
            if (!mood.startsWith('#')) {
                mood = '#' + mood;
            }
            moodList.unshift(mood);
            showMood();
        }
        else {
            alert("Please type in your mood!");
        }
        inputField.value = '';
    }
    else if (target.classList.contains("push-button")) {
        let mood = inputField.value.trim();
        if (mood !== '') {
            if (!mood.startsWith('#')) {
                mood = '#' + mood;
            }
            moodList.push(mood);
            showMood();
        }
        else {
            alert("Please type in your mood!");
        }
        inputField.value = '';
    }
    else if (target.classList.contains("shift-button")) {
        if (moodList.length > 0) {
            moodList.shift();
            showMood();
        }
    }
    else if (target.classList.contains("pop-button")) {
        if (moodList.length > 0) {
            moodList.pop();
            showMood();
        }
    }
    else if (target.classList.contains("clear-button")) {
        if (moodList.length > 0) {
            moodList = [];
            showMood();
            alert("Hope your mood is as clear as this list!")
        }
    }
});