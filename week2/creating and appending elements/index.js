var headerText = document.createElement('h1');
headerText.textContent = 'Welcome to my JS site';
document.body.append(headerText);

var paragraph = document.createElement('para');
paragraph.textContent = 'All of this was created with Javascript';
document.body.append(paragraph);

var orderedList = document.createElement('ol');
var num1 = document.createElement('li');
num1.textContent = 'Number One';
orderedList.append(num1);

var num2 = document.createElement('li');
num2.textContent = 'Number Two';
orderedList.append(num2);

var num3 = document.createElement('li');
num3.textContent = 'Number Three';
orderedList.append(num3);

document.body.append(orderedList);




