let addProject = document.querySelector(".add-btn");
let projectSec = document.querySelector(".project-container");
let projects = document.querySelectorAll(".project");
let todos = document.querySelector(".todos-container");
let addtodos = document.querySelector(".add-btn-todo");
let todoText = document.querySelector(".todo");
let id = 1;
addProject.addEventListener("click", () => {
  console.log("works");
  let projName = prompt("Enter your project name");
  let div = document.createElement("div");
  div.classList.add("project");
  div.setAttribute("data-id", id);
  let divTodo = document.createElement("div");
  divTodo.classList.add("todos-display");
  divTodo.setAttribute("id", id);
  id++;
  console.log(div);
  console.log(divTodo);
  todos.appendChild(divTodo);
  div.textContent = projName;

  projectSec.appendChild(div);
  projects = document.querySelectorAll(".project");
  console.log(projects);
  projects.forEach((element) => {
    element.addEventListener("click", showing);
  });
});

function showing(e) {
  document.querySelector(".todo-show").classList.add("todos-display");
  document.querySelector(".todo-show").classList.remove("todo-show");
  const idd = e.target.dataset.id;
  let show = document.getElementById(idd);
  show.classList.add("todo-show");
  show.classList.remove("todos-display");
  console.log(show);
}
addtodos.addEventListener("click", appendTodos);
function appendTodos() {
  let div = document.createElement("div");
  div.classList.add("affichage");
  let text = document.createElement("p");
  text.textContent = todoText.value;
  let btn = document.createElement("button");
  btn.textContent = "edit";
  btn.classList.add("btn-edit");
  btn.addEventListener("click", () => {
    text.textContent = prompt("edit your todo");
  });
  let delet = document.createElement("button");
  delet.textContent = "Delete";
  delet.classList.add("btn-edit");
  delet.addEventListener("click", () => {
    item.removeChild(div);
  });
  div.appendChild(text);
  div.appendChild(btn);
  div.appendChild(delet);
  let item = document.querySelector(".todo-show");
  item.appendChild(div);
}
