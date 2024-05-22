let todoList = [
  {
    items: "buy milk",
    dueDate: "22/05/2024",
  },
  {
    items: "learn js",
    dueDate: "22/05/2024",
  },
];
displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  //pushing an object here
  todoList.push({ items: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = ""; //Input elemts value is set to blank
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    // let todoItem = todoList[i].item;
    // let todoDate = todoList[i].dueDate;
    let { items, dueDate } = todoList[i];
    newHtml += `
    <div>
    <span class="items-text">${items}</span>
    <span class="date-text">${dueDate}</span>
    <button class="delete-btn" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button> 
    <button class="update-btn" onclick="updateTodo();">Update</button>
    </div>
    `;
  }
  containerElement.innerHTML = newHtml;
}
