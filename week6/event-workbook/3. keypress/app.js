/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */



document.addEventListener('keydown', function (e) {
    var keypress = e.key
    var keycode = keypress.charCodeAt(0);
document.getElementById("output").textContent = "key press is: " + e.key + ". the keycode = " + keycode 
    
})




