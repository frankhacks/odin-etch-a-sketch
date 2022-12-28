const griddy = document.getElementById('grid');
function addGriddies(a){
    for(i=0;i<a;i++){
        var lilGriddy = document.createElement("div");
        lilGriddy.setAttribute("class","lilGriddy");
        lilGriddy.id = "lilGriddy" + i;
        //lilGriddy.textContent ="o";
        var cellWidth = 100 / Math.sqrt(a);
        lilGriddy.style.width=cellWidth+`%`;
        griddy.appendChild(lilGriddy);
    }
    draw();
}

function draw() {
var cell = document.getElementsByClassName('lilGriddy');
var numCells = cell.length;

for (var i = 0; i < numCells; i++) {
cell[i].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor="black";
});
}
}

function mouseOver() {
    document.getElementsByClassName(`"lilGriddy"+i`).className = "open";
}

var slider = document.getElementById("myRange");
var output = document.getElementById("size");
output.innerHTML = slider.value; // Display the default slider value

var grid = document.getElementById("grid");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    var canvas = this.value * this.value;
    grid.innerHTML="";
    addGriddies(canvas);
}

window.onload=addGriddies(256);