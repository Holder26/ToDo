
//selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo")
const selectFilter = document.querySelector(".select")


//ecouteurs
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('input', filterTodo)






//fonctions

function addTodo(event){
    event.preventDefault();
//toDo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
//Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
//ajoute todo au LocalStorage
    saveLocalTodo(todoInput.value)
    todoDiv.appendChild(newTodo);
//boutton chek
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
//bouton suprimer

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

//add todo => todo list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}  

function deleteCheck (e){
    //console.log(e.target)
    const item = e.target;
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
       todo.addEventListener("transitionend", function (){
            todo.remove();
            e.preventDefault
        } )
        
    }

    if(item.classList[0] === "complete-btn"){
        item.parentElement.classList.toggle("completed")
    }
}
function filterTodo(e) {
    const todos = todoList.children;
    for (let i = 0; i < todos.length; i++) {
      let todo = todos[i];
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
      }
    }
  }

function saveLocalTodo(todo){
    //check si items existans
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))

}
function getTodo(todo){
    //check si items existans
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
  

}





