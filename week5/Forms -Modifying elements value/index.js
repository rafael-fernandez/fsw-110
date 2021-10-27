

function getdetails() {
    var fName = document.forms["details"]["firstname"].value;
    var lName = document.forms["details"]["lastname"].value;
   
    var email = document.forms["details"]["email"].value;
    var boxM = document.forms["details"]["message"].value;

    alert("My name is " + fName + " " + lName + ", " + "My email is " + " " + " " + email + ". " + "Here is what I have to say: " + " " + boxM );

    let btnClear = document.querySelector('button');
    btnClear.addEventListener('click', () => {
        inputs.forEach(input => input.value = ' ');
    })

}