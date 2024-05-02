let squares = 16;
let board = document.querySelector(".draw-board");

let mouseEvent = function () {
    this.style.backgroundColor = "black";
}

for (i = 0; i < squares; i++) {
    let pixel = document.createElement("div");
    pixel.textContent = "hi";
    pixel.addEventListener("mouseover", mouseEvent);
    board.appendChild(pixel);
}