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

generateGrid(64);