let todoList = ["buy milk", "learn js"];
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
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    newHtml += `
    <div>
    <span>${todoList[i]}</span>
    <button onclick="todoList.splice(${i}, 1); displayItems();">Delete</button> 
    </div>
    `;
  }
  containerElement.innerHTML = newHtml;
}
