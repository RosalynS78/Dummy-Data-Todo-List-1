// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "second delectus aut autem",
    "completed": false
  }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

const logTodos = () => {
    console.log(arrayOfTodos)
  }

const populateTodos = () => {
    //Capture the ol item into a variable (getElementById)
    let todoList = document.getElementById('todo-list');

    //let todoTitle = "";

    for (i=0; i < arrayOfTodos.length; i++) {

      //createText inside the li using the title property.
      // use createTextNode
      todoTitle = document.createTextNode(arrayOfTodos[i].title);
        
        //createElement to make a new LI
        let todoItem = document.createElement("LI");
            if (arrayOfTodos[i].completed) {
                // add a class to the li to make text green
                todoItem.classList.add("istrue");
            } else {
                todoItem.classList.add("isfalse");
            }

        //Now append the text to the new element
        todoItem.appendChild(todoTitle);

        //Then append the element to the ol element.
        todoList.appendChild(todoItem);

    } // end of for loop
} // end of function