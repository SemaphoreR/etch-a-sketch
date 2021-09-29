let container = document.querySelector('#container');

function createDivs() {
    let pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.addEventListener('mouseover', changeColor)
    container.appendChild(pixel);
}

function clearGrid() {
    pixelArray = document.getElementsByClassName("pixel");
    for (i=0; i < pixelArray.length; i++) {
        pixelArray[i].style.opacity = 0;
    }
}

function emptyGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function startingGrid(num) {
    for (i = 0; i < (num * num); i++) {
        createDivs();
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`
    }
}

function changeColor(e) {
    let currentOpacity = window.getComputedStyle(e.target).getPropertyValue("opacity");
        e.target.style.opacity = Number(currentOpacity) + .1; 
}



function createGrid() {
    let number = parseInt(prompt("Enter a number between 1 and 100"));
    let numberSquared = number * number;
    if ((isNaN(number)) || (number === "") || (typeof(number) !==  'number')) {
        alert("Invalid entry!")
    } else if ((number > 100) || (number < 0)) {
        alert("Try a number between 1 and 100.");
    } else emptyGrid(container);
    for (i = 0; i < numberSquared; i++) {
        createDivs();
        container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
        container.style.gridTemplateRows = `repeat(${number}, 1fr)`
    }
    }

startingGrid(16);

document.getElementById("clear").addEventListener("click", clearGrid, false)
document.getElementById("newCanvas").addEventListener("click", createGrid, false)
