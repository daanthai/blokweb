// JavaScript Document
var deButton = document.querySelector(".hamburgerMenu");

function menuHeenEnWeer() {
    let hetMenu = document.querySelector("form");
    hetMenu.classList.toggle("toonMenu");
}

deButton.addEventListener("click", menuHeenEnWeer);
