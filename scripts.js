const griddy = document.getElementById('grid');
function addGriddies(){
    for(i=0;i<256;i++){
        var lilGriddy = document.createElement("div");
        lilGriddy.setAttribute("class","lilGriddy");
        lilGriddy.id = "lilGriddy" + i;
        lilGriddy.textContent = "TEST! ";
        griddy.appendChild(lilGriddy);
    }
}

window.onload=addGriddies();

var cell = document.getElementsByClassName('lilGriddy');
var numCells = cell.length;

for (var i = 0; i < numCells; i++) {
cell[i].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor="black";
});
}

function mouseOver() {
    document.getElementsByClassName(`"lilGriddy"+i`).className = "open";
}