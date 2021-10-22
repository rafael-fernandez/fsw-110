function add() {
    var a = parseInt(document.getElementById('number').value);
    var b = parseInt(document.getElementById('numbers').value);
    document.getElementById("result").innerHTML = (a + b);
}

function subtract() {
    var a = parseInt(document.getElementById('number').value);
    var b = parseInt(document.getElementById('numbers').value);
    document.getElementById("result").innerHTML = (a - b);
}

function multiply() {
    var a = document.getElementById('number').value;
    var b = document.getElementById('numbers').value;
    document.getElementById("result").innerHTML = (a * b);
}

function divide() {
    var a = document.getElementById('number').value;
    var b = document.getElementById('numbers').value;
    document.getElementById("result").innerHTML = (a / b);
}
