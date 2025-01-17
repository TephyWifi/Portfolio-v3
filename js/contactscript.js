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


// Mood Buttons
// let addFirstButton = document.querySelector(".unshift-button");
// let addLastButton = document.querySelector(".push-button");
// let removeFirstButton = document.querySelector(".shift-button");
// let removeLastButton = document.querySelector(".pop-button");


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
    let target = event.target;

    if (target.classList.contains("unshift-button")) {
        const mood = inputField.value.trim();
        if (mood !== '') {
            moodList.unshift(mood);
            showMood();
        }
        else {
            alert("Please type in your mood!");
        }
        inputField.value = '';
    }
    else if (target.classList.contains("push-button")) {
        const mood = inputField.value.trim();
        if (mood !== '') {
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
});


// let i;
// for (i = 0; i < addFirst.length; i++) {
//     let span = document.createElement("span");
//     span.className

// }

// let moodList = 1;
// showMood(moodList);

// function unShift() {
//     showMood(moodList.unshift(newElement));

// }

// function newElement() {
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("myInput").value;
//     let t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if(inputValue === '') {
//         alert("Please type in your mood!");
//     }
//     else {
//         document.getElementById("myUL").appendChild(li);
//     }
//     // document.getElementById("myInput").value = "";
// });

// document.querySelector("moodBox").addEventListener("click", function (event) {
//     let target = event.target;

//     if (target.classList.contains("unshift-button")) {
//         newElement.unshift(li);
//     }
//     else if (target.classList.contains("push-button")) {
//         newElement.push(li);
//     }
//     else if (target.classList.contains("shift-button")) {
//         newElement.shift(li);
//     }
//     else (target.classList.contains("pop-button")) {
//         newElement.pop(li);
//     }

// });