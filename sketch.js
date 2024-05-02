let drawBoard = document.querySelector(".draw-board");
drawBoard.style.border = "2px solid black";

let mouseEvent = function () {
    this.style.backgroundColor = "gray";
}

let generateGrid = function (dimension) {
    let rows = Math.sqrt(dimension);
    drawBoard.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;

    for (i = 0; i < dimension; i++) {
        let pixel = document.createElement("div");
        pixel.textContent = "hi";
        pixel.style.backgroundColor = "white";
        pixel.addEventListener("mouseover", mouseEvent);
        drawBoard.appendChild(pixel);
    }
}

let resetBtn = document.querySelector(".reset");
let resetBoard = function () {
    let squares = drawBoard.querySelectorAll("div");
    for (square of squares) {
        drawBoard.removeChild(square);
    }
}
resetBtn.onclick = resetBoard;


let submitBtn = document.querySelector(".submit");
let dimInput = document.querySelector(".dimension");


submitBtn.onclick = () => {
    resetBoard();
    let dim = dimInput.value;
    if (Number.isInteger(Math.sqrt(dim))) {
        generateGrid(dim);
    } else {
        alert("invalid input");
    }
}