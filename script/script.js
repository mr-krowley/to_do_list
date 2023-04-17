
const inputRecord = document.querySelector(".inputRecord"); // получили импут с текстом
const addRecord = document.querySelector(".addRecord"); // получили кнопку добавить
const listContainer = document.querySelector(".listContainer"); //получили ul контэнер для задач 
const form = document.querySelector("#form");

let toDoList = JSON.parse(localStorage.getItem("toDoList")) ?? []; // если массив не пустой 
//при загрузке приложения получает данные из локала по ключу "toDoList" и парсим их обратно и отображает дело

console.log(toDoList);

//функция сохранения новых дел кнопка добавить
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
  // сохраняем наше дело в локол стореч при это не забывааем переделать обьект в строку
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  toDoList.forEach(function (elem) {
    listContainer.append(creatingATask(elem));
    //зачистка инпута после добавления дела
    document.getElementById("inputRecord").value = "";
  });
}

//функция удаления завершонных дел
let remoteCompleted = () => {
 
}

//функция удаления всех дел 
let deleteToDoList = (arr) => {
  toDoList = [];
  paintTasc();
  
}







paintTasc();

// for (const delo of toDoList) {
//   paintTasc(delo);
// }



//прослушки
//form.addEventListener("click", preservation);
addRecord.addEventListener("click", preservation);
deleteСompleted.addEventListener("click", remoteCompleted);
deleteEverything.addEventListener("click", deleteToDoList);

