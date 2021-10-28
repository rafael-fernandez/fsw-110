


function getdetails() {
    var fName = document.forms["details"]["firstname"].value;
    var lName = document.forms["details"]["lastname"].value;
    var age = document.forms["details"]["age"].value;
    var gender = document.forms["details"]["gender"].value;
    //var date = document.forms["details"]["date"].value;
    var email = document.forms["details"]["email"].value;
    var hear  = document.forms["details"]["hear"].value;
    var recom = document.forms["details"]["recom"].value;
    var goodTime = document.forms["details"]["goodTime"].value;
    var ack = document.forms["details"]["ack"].value;
    
  
    

    alert("First name: " + fName + " " + "Last name: " + lName + ", " + "Age:" + age + " " + "Gender: " + gender + ". " + "Email: " + email + ". " + "Will you recommend our service?" + " " + "I will" + " " + recom + " " + "recommend your services." + " " + "How did you hear about us?" + " " + hear + ", " + "I will make myself " + " " + goodTime + " " + "during this time slot." + " " + "Account:" + " " + ack );

 



    let btnClear = document.querySelector('button');
    btnClear.addEventListener('click', () => {
        inputs.forEach(input => input.value = ' ');
    })

}

 



