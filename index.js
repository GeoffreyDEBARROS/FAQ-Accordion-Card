let question1 = document.querySelector(".question1");
let question2 = document.querySelector(".question2");
let question3 = document.querySelector(".question3");
let question4 = document.querySelector(".question4");
let question5 = document.querySelector(".question5");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let answer5 = document.querySelector(".answer5");
let arrow1 = document.querySelector(".arrow1");
let arrow2 = document.querySelector(".arrow2");
let arrow3 = document.querySelector(".arrow3");
let arrow4 = document.querySelector(".arrow4");
let arrow5 = document.querySelector(".arrow5");


question1.addEventListener("click", () => {
    if (answer1.textContent == "") {
        answer1.textContent =
        "No more than 2GB. All files in your account must fit your allotted storage space.";
        question1.style.color = "black";
        arrow1.style.transform = "rotate(180deg)";
    } else {
        answer1.textContent = ""
        arrow1.style.transform = "rotate(0deg)";
        question1.style.color = "";
    }
});

question2.addEventListener("click", () => {
    if (answer2.textContent == "") {
        answer2.textContent =
        "No more than 2GB. All files in your account must fit your allotted storage space.";
        question2.style.color = "black";
        arrow2.style.transform = "rotate(180deg)";
    } else {
        answer2.textContent = ""
        arrow2.style.transform = "rotate(0deg)";
        question2.style.color = "";
    }
});

question3.addEventListener("click", () => {
    if (answer3.textContent == "") {
        answer3.textContent =
        "No more than 2GB. All files in your account must fit your allotted storage space.";
        question3.style.color = "black";
        arrow3.style.transform = "rotate(180deg)";
    } else {
        answer3.textContent = ""
        arrow3.style.transform = "rotate(0deg)";
        question3.style.color = "";
    }
});

question4.addEventListener("click", () => {
    if (answer4.textContent == "") {
        answer4.textContent =
        "No more than 2GB. All files in your account must fit your allotted storage space.";
        question4.style.color = "black";
        arrow4.style.transform = "rotate(180deg)";
    } else {
        answer4.textContent = ""
        arrow4.style.transform = "rotate(0deg)";
        question4.style.color = "";
    }
});

question5.addEventListener("click", () => {
    if (answer5.textContent == "") {
        answer5.textContent =
        "No more than 2GB. All files in your account must fit your allotted storage space.";
        question5.style.color = "black";
        arrow5.style.transform = "rotate(180deg)";
    } else {
        answer5.textContent = ""
        arrow5.style.transform = "rotate(0deg)";
        question5.style.color = "";
    }
});