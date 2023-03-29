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
let arrow = document.querySelector(".arrow")

question1.addEventListener("click", () => {
    answer1.textContent = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    arrow.style.transform = "rotate(180deg)"
});

question2.addEventListener("click", () => {
    answer2.textContent = "No more than 2GB. All files in your account must fit your allotted storage space."
});