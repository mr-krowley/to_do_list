const inputRecord = document.querySelector(".inputRecord"); // получили импут с текстом
const addRecord = document.querySelector(".addRecord"); // получили кнопку добавить
const listContainer = document.querySelector(".listContainer"); //получили ul контэнер для задач 
const form = document.querySelector("#form");

let toDoList = []; //пустой масив для хранения обьектов newTodo

//функция сохранения новых дел
let preservation = (e) => {
  e.preventDefault();
  const newTodo = {
    todo: inputRecord.value,
    checked: false,
    id: false,
  };
  toDoList.push(newTodo);
  paintTasc(toDoList);
};

//функция добавление дел в ul как li
// const caseKeeping = () => {
//   let displayMessage = "";
//   toDoList.forEach(function (item, index) {
//     displayMessage += `
//     <li class="checked" >
//     <input type="checkbox" id"item_${index}">
//     <label for="item_${index}">${item.todo}</label>   
//     <button class="delete">❌</button>
//     </li>
//     `;
//     listContainer.innerHTML = displayMessage;
//   });
// };

// создание li в ul 
const creatingATask = (obj) => {
  let displayMessage = document.createElement("li");
  displayMessage.innerHTML =
    `
    <input type="checkbox" id="index">
    <label for="index">${obj.todo}</label>   
    <button class="delete">❌</button>
    `
  return displayMessage;
}
// функция перебора и отрисовки li  в  listContainer
function paintTasc() {
  listContainer.innerHTML = "";
  toDoList.forEach(function (elem) {
    listContainer.append(creatingATask(elem));
   
  });
   
}


paintTasc(toDoList);





//прослушки
//form.addEventListener("click", preservation);
addRecord.addEventListener("click", preservation);
