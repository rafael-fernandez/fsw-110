
/*  1) White to start as a base color.   */

var col = document.getElementById("squareOne");
col.style.backgroundColor = "white";


/*  2) Black upon complete loading of the HTML page  */

window.onload = function () {
    document.getElementById("squareOne").style.backgroundColor = "black";
}

/* 3) Green when the mouse hovers over the square*/

document.getElementById("squareOne").addEventListener("mouseover", function () {
    document.getElementById("squareOne").style.backgroundColor = "green";
});

/* 4) Yellow when the mouse button is held down over the square */
document.getElementById("squareOne").addEventListener("mousedown", function () {
    document.getElementById("squareOne").style.backgroundColor = "yellow";
});

/* 5) Blue when the mouse button is let go over the square */
document.getElementById("squareOne").addEventListener("mouseup", function () {
    document.getElementById("squareOne").style.backgroundColor = "blue";
});

/* 6) Red when the mouse is double clicked in the square */
document.getElementById("squareOne").addEventListener("dblclick", function () {
    document.getElementById("squareOne").style.backgroundColor = "red";
});

/* 7) Purple when the mouse scroll is used somewhere in the window (not just over the square). *Try adding more content to your page with JS if you can not scroll  */

                const bodyElement = document.querySelector("div") 
                function scroll() {
                bodyElement.style.backgroundColor = "purple"
                }
                window.addEventListener("mousewheel", scroll)
                

/* 8) You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color */
document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
        document.getElementById("squareOne").style.backgroundColor = "red"
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'b') {
        document.getElementById("squareOne").style.backgroundColor = "blue"
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'g') {
        document.getElementById("squareOne").style.backgroundColor = "green"
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'p') {
        document.getElementById("squareOne").style.backgroundColor = "purple"
    }

});

document.addEventListener('keydown', function (event) {
    if (event.key === 'y') {
        document.getElementById("squareOne").style.backgroundColor = "yellow"
    }

});




