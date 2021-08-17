let gridSizeSelector = document.getElementById('grid-size');
let colorSelector = document.getElementById('color-selector');
let resetButton = document.getElementById('reset-button');
let gridContainer = document.getElementById('grid-container');
let gridColumns = document.getElementsByClassName('grid-column');

resetButton.addEventListener('click', () => {
    while (gridContainer.lastElementChild) {
    gridContainer.removeChild(gridContainer.lastElementChild);
    }
    createGrid ();
    sizeGridColumns();
    draw ();
   });

let draw = function () {
    for (i=0; i < gridColumns.length; i++) {
        gridColumns[i].addEventListener ('mouseover', function () {       
            if (document.getElementById('color-selector').value == 'rainbow') {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = '#'+randomColor;
            } else {
            this.style.backgroundColor = document.getElementById('color-selector').value 
            }    
        })
    }
}

let createGrid = function () {
    let gridWidth = Number(gridSizeSelector.value);
    for (i=0; i < gridWidth; i++) {
        let createDivRow = document.createElement('div');
        createDivRow.setAttribute('class', 'grid-row');
        gridContainer.appendChild(createDivRow);
            for (x=0; x < gridWidth; x++) {
                let lastGridRow = gridContainer.lastElementChild;
                let createDivItem = document.createElement('div');
                createDivItem.setAttribute('class', 'grid-column');
                lastGridRow.appendChild(createDivItem);
            }
    }   
}

let sizeGridColumns = function () {
    gridWidth = Number(gridSizeSelector.value);
    let gridItemWidth = (gridContainer.clientWidth)/gridWidth;
    for (i=0; i < gridColumns.length; i++) {
    gridColumns[i].style.width = (gridItemWidth + 'px');
    }
}


