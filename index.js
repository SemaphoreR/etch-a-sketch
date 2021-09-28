let container = document.querySelector('#container');

function emptyGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

function createGrid() {
    let number = parseInt(document.getElementById('numberInput').value);
    let numberSquared = Math.pow(number, 2);
    if ((isNaN(number)) || (number === "") || (typeof(number) !==  'number')) {
        alert("Invalid entry!")
    } else if ((number > 100) || (number < 0)) {
        alert("Try a number between 1 and 100.");
    } else emptyGrid(container);
    for (i = 0; i < numberSquared; i++) {
        let pixel = document.createElement("div");
        pixel.addEventListener('mouseover', changeColor)
        container.appendChild(pixel);
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`
    }
    }

createGrid(16);

document.getElementById("button").addEventListener("click", createGrid, false)
