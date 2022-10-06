const main = document.querySelector('#main');
const grid = document.createElement('div');
grid.classList.add("grid-container");
const gridButton = document.getElementById("grid-button");
const resetButton = document.getElementById("grid-reset");
const hoverItem = document.getElementsByClassName("grid-item");

resetButton.onclick = () => resetGrid();
gridButton.onclick = () => createGrid();



function createGrid() {
    const size = prompt("Grid size: ")
    if (size < 100) {
        for (let i = 0; i < size * size; i++) {
            const gridItem = document.createElement('div');
            grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
            main.appendChild(grid);
            gridItem.classList.add('grid-item');
            grid.append(gridItem);

            gridItem.onmouseover = () => hoverColor();

            function hoverColor() {
                gridItem.classList.remove("grid-item");
                gridItem.classList.add("grid-item-hover");
            }
        }
    } else {
        alert("Enter number less than 100!");
        return createGrid();
    }
}



function resetGrid() {
    grid.innerHTML = "";
    grid.style.background = "none";
}