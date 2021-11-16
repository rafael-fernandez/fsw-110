

let addToDoButton = document.getElementById('addToDo');
let main = document.getElementById('main');
let inputField = document.getElementById('inputField');
 
addToDoButton.addEventListener('click', function(){
    var toDoContainer =  document.createElement('div');
    toDoContainer.classList.add('row')
    var newItem = document.createElement('div');
    newItem.classList.add('column');
   
    var remButton= document.createElement('button');
       
    newItem.innerText = inputField.value;
    
     remButton.innerText = "delete"
      toDoContainer.appendChild(newItem);
       toDoContainer.appendChild(remButton)
    main.appendChild(toDoContainer)
     inputField.value = "";
 
    remButton.addEventListener('click', function (e) {
           main.removeChild(toDoContainer)
           
   
     })
})
























