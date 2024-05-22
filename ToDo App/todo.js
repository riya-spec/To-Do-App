let todoList = [];
displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  console.log("inputElement: ", inputElement);
  let todoItem = inputElement.value;
  console.log("todoItem: ", todoItem);
  todoList.push(todoItem);
  console.log("todoList: ", todoList);
  inputElement.value = "";
  displayItems();
}

function displayItems() {
  let displayElements = document.querySelector("#todo-items");
  displayElements.innerText = " ";
  for (let i = 0; i < todoList.length; i++) {
    displayElements.innerText = displayElements.innerText + "\n" + todoList[i];
  }
}
