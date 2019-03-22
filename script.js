let button = document.querySelector(".button");


function changeColor() {
    let box = document.querySelector(".box");
    box.style.backgroundColor = "red";

}

button.addEventListener('click', changeColor);