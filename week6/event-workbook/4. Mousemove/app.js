
var boxArea = document.getElementById("red-box")
boxArea.addEventListener('mousemove', function (e) {
document.getElementById("red-box").textContent = "x coordinate: " + e.clientX + " y coordinate: " + e.clientY

})


