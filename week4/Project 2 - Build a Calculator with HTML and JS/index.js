function add() {
    var a = parseInt(document.getElementById('number').value);
    var b = parseInt(document.getElementById('numbers').value);
    document.getElementById("result").innerHTML = a + b;
}

function subtract() {
    var a = parseInt(document.getElementById('numberLess').value);
    var b = parseInt(document.getElementById('numbersLess').value);
    document.getElementById("result").innerHTML = (a - b);
}

function multiply() {
    var a = document.getElementById('numberTime').value;
    var b = document.getElementById('numbersTime').value;
    document.getElementById("result").innerHTML = (a * b);
}

/*
function divide() {
    var a = document.getElementById('numberDiv').value;
    var b = document.getElementById('numbersDiv').value;
    document.getElementById("result").innerHTML =  (a / b);
}

*/
