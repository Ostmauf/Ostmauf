const todoInput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todobutton.addEventListener("click", addTodo);

//Funktions

function addTodo(event) {

event.preventDefault();

//todoDiv
const todoDiv = document.createElement("div");
todoDiv.classList.add(todo);

const newTodo = document.createElement("li");
newTodo.innerText = "hej";
newTodo.classList.add(todo-item);
todoDiv.appendChild(newTodo);

//Complete Button.
const completedButton = document.createElement("button");
const checkedButton = document.createElement("button");

completedButton.innerHTML = "<i class = 'fas fa-check'></i>";
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//Create trash Button.
const trashButton = document.createElement("button");
trashButton.innerHTML = "<i class = 'fas fa-trash'></i>";
trashButton.classList.add("complete-btn");
todoDiv.appendChild(trashButton);


}



/* 
<div class="todo">

<li></li>
<button>Delete</button>
<button>Checked</button>

</div>

*/ 