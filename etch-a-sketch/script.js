const gridSquares = document.querySelector('#grid-squares')
const alertButton = document.querySelector("button")

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(gridSize = 64) {
    for (let number = 1; number <= gridSize; number++) {
        const gridSquare = document.createElement('div');
        gridSquare.style.opacity = "0";  // Initial opacity level
        gridSquare.dataset.opacityLevel = "0";  // Track the opacity level

        gridSquares.appendChild(gridSquare);

        gridSquare.addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(gridSquare.dataset.opacityLevel);

            if (currentOpacity < 1) {
                currentOpacity += 0.1;  // Increase opacity by 10%
                gridSquare.dataset.opacityLevel = currentOpacity.toFixed(1);  // Store updated opacity
                gridSquare.style.backgroundColor = "pink";  // Set random color
                gridSquare.style.opacity = currentOpacity;  // Apply new opacity
            }
        });
    }
}

createGrid(10);

alertButton.addEventListener("click", () => {
    let newGridSize = parseInt(prompt("What is the number of squares per side for the new grid?"))
    while (true) {
        if (!isNaN(newGridSize) && newGridSize > 0 && newGridSize <= 100){
            break
        }
        if (newGridSize > 100) {
            alert("That's too big chief")
        }
        if (isNaN(newGridSize)){
            alert("You didn't enter a whole number homie")
        }
        if (newGridSize < 0){
            alert("Number is too small :(")
        }
        newGridSize = parseInt(prompt("What is the number of squares per side for the new grid?"))
    } 
    gridSquares.innerHTML = "";
    createGrid(newGridSize)
}) 