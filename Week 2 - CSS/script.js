console.log("hi");

const projects = document.querySelectorAll(".project");
// queryselector vs elembyid???
const myName = document.querySelector("#my-name");

const gitButton1 = document.querySelector("#git-button1");
const gitButton2 = document.querySelector("#git-button2");

myName.textContent = "Test Name";
myName.style.color = "blue";


let checkClick = 0;
myName.addEventListener("click", () => {
    if (checkClick % 2 == 0) {
        myName.style.color = "black";
    } else {
        myName.style.color = "blue"
    }
    checkClick++;
    console.log(checkClick);
});

gitButton1.addEventListener("click", () => {
    window.open("https://github.com/Amyat103");
});

gitButton2.addEventListener("click", () => {
    window.open("https://github.com/Amyat103");
});


const linkImage = document.querySelector("#linkedin-img");
const gitImage = document.querySelector("#github-img");

linkImage.addEventListener("click", () => {
    window.open("https://google.com")
});

linkImage.addEventListener("hover", () => {
    linkImage.style.color = "green";
});

gitImage.addEventListener("click", () => {
    window.open("https://google.com")
});

const hideBtn = document.querySelector("#hide");
const showBtn = document.querySelector("#show");

hideBtn.addEventListener("click", () => {
    for (p of hideBtn) {
        p.style.visibility = "hidden";
    }
});

