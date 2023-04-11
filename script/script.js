const inputRecord = document.querySelector(".inputRecord"); // получили импут с текстом
const addRecord = document.querySelector(".addRecord"); // получили кнопку добавить
const listContainer = document.querySelector(".listContainer"); //получили ul контэнер для задач 


let toDoList = []; //пустой масив для хранения обьектов newTodo

//функция сохранения новых дел
let preservation = (e) => {
  e.preventDefault();
  const newTodo = {
    todo: inputRecord.value,
    checked: false,
    important: false,
  };
  toDoList.push(newTodo);
  caseKeeping();
};

//функция добавление дел в ul как li
const caseKeeping = () => {
  let displayMessage = "";
  toDoList.forEach(function (item, index) {
    displayMessage += `
    <li class="checked" >
    <input type="checkbox" id"item_${index}">
    <label for="item_${index}">${item.todo}</label>   
    </li>
    `;
    listContainer.innerHTML = displayMessage;
  });
};

//прослушки
addRecord.addEventListener("click", preservation);
