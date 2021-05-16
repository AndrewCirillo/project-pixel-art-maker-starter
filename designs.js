//Constants
const picker = document.getElementById('colorPicker');
const size = document.getElementById('sizePicker');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
const canvas = document.getElementById('pixelCanvas');

//Get initial color
let color = picker.value;

//Color input Listener
picker.addEventListener('change', function(){
    color = picker.value;
});

//input listener and action
pixelCanvas.addEventListener('click', function(clicked) {
//Get clicked variables
    if (clicked.target.nodeName === 'TD') {
        let cell = clicked.target.style;
        if (cell.backgroundColor != hexToRGB(color)) {
            cell.backgroundColor = color;
        }
        else {
            cell.backgroundColor = "transparent";
        }
    }
});


// Size input Listener and call makeGrid function
size.addEventListener ('submit', function(submitted) {
    submitted.preventDefault();
    let height = gridHeight.value;
    let width = gridWidth.value;
    makeGrid(height, width);
});

//function to make the grid
function makeGrid(height, width) {
    canvas.innerHTML = '';
    for (let row = 0; row < height; row++) {
        let addRow = pixelCanvas.insertRow(row);
        for (let col = 0; col < width; col++) {
            addRow.insertCell(col);
        }
    }
}
//function to convert hex to RBG so logical comparison of background color and picker color works.
function hexToRGB(h) {
    let r = 0, g = 0, b = 0;
    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];
    return "rgb("+ +r + ", " + +g + ", " + +b + ")";
}


