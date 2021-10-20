function myCal() {
    var a = parseInt(document.getElementById('number1').value);
    var b = parseInt(document.getElementById('numbers1').value);
    document.getElementById("result1").innerHTML = (a + b);
}

function myCal1() {
    var a = parseInt(document.getElementById('number2').value);
    var b = parseInt(document.getElementById('numbers2').value);
    document.getElementById("result2").innerHTML = (a - b);
}

function myCal2() {
    var a = document.getElementById('number3').value;
    var b = document.getElementById('numbers3').value;
    document.getElementById("result3").innerHTML = (a * b);
}

function myCal3() {
    var a = document.getElementById('number4').value;
    var b = document.getElementById('numbers4').value;
    document.getElementById("result4").innerHTML = (a / b);
}
