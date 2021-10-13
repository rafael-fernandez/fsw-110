for (let i = 0; i < 10; i++) {
    var repeat = document.createElement("h1");
    repeat.textContent = "Hello World!";
    document.body.append(repeat)
    repeat.style.color = 'blue'
    repeat.style.border = 'solid'
    repeat.style.textAlign = 'center'

}


var span = document.getElementsByTagName("h1")[1];
span.style.color = "red";

var span = document.getElementsByTagName("h1")[3];
span.style.color = "red";

var span = document.getElementsByTagName("h1")[5];
span.style.color = "red";

var span = document.getElementsByTagName("h1")[7];
span.style.color = "red";

var span = document.getElementsByTagName("h1")[9];
span.style.color = "red";




var names = [
    "Steve",
    "Larry",
    "Joe",
    "Shirley",
    "Steph",
    "Nate",
    "Rick",
    "Emily"

];

for (var i = 0; i < names.length; i++) {
    document.write("<li>" + names[i] + "</li>");
    //style.textDecoration = 'underline'
}
