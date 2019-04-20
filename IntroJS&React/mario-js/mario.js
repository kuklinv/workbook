// im work with
//https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F
// в курсе Introdaction JS&Reakt on Stepik 

// draw piramid on page

function drawPyramid (height) {
	let line = "";
  let space = height-1;
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

// rundom number function

function random (number) {
  return Math.floor(Math.random()*(number));
}

// random color function

function randomColor () {   
  return 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
}

//  random Page backgroundcolor change function
function chColorPageBackground () {
  document.body.style.backgroundColor = randomColor();
}




