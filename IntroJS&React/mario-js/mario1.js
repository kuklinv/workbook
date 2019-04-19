// new var of js
// with listeners 

// its button on page

var btnPyramid = document.getElementById("goPyramid");
var btnChColor = document.getElementById("goChangColor");
var buttons = document.querySelectorAll('button');

// its listeners

btnPyramid.addEventListener('onmousover', chColorElementBackground);
btnPyramid.addEventListener('onmousout', chColorElementBackground);

// draw piramid on page

function drawPyramid(height) {
    let line = "";
    let space = height - 1;
    var targetDiv = document.getElementById("pyramid");
    var eraseDiv = document.getElementById("construction");
    if (eraseDiv) { eraseDiv.remove(); }
    for (let b = 2; b <= height + 2; b += 1) { // количество бриков #
        line = ((" ").repeat(space) + ("#").repeat(b));
        space -= 1;
        var newPelem = document.createElement("p");
        newPelem.innerHTML = line;
        targetDiv.appendChild(newPelem);
    }
}

// its HANDLERS!!!!!

// rundom number function

function random(number) {
    return Math.floor(Math.random() * (number));
}

// random color function

function randomColor() {
    return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
}

//  random any elements (e.target) backgroundcolor change function // dont work!!!!!!

function chColorElementBackground(e) {
    e.target.style.backgroundColor = randomColor();
}

// old function for chenge color on page background

function chColorPageBackground() {
    document.body.style.backgroundColor = randomColor();
}

// Its LISTENERS !!!!