
const inputRecord = document.querySelector(".inputRecord"); // получили импут с текстом
const addRecord = document.querySelector(".addRecord"); // получили кнопку добавить
const listContainer = document.querySelector(".listContainer"); //получили ul контэнер для задач 

const form = document.querySelector("#form");
//ключ
const KEY_KEY = "toDoList";

let toDoList = JSON.parse(localStorage.getItem("toDoList")) ?? []; // если массив не пустой
//при загрузке приложения получает данные из локала по ключу "toDoList" и парсим их обратно и отображает дело
//глобальная переменная для уникального айди

//функция сохранения новых дел кнопка добавить
let preservation = (e) => {
  e.preventDefault();
  const newTodo = {
    todo: inputRecord.value,
    checked: false,
    id: Date.now(),
  };
  toDoList.push(newTodo);
  console.log(newTodo);
  console.log(toDoList);
  paintTasc(toDoList);
};

// создание li в ul 
const creatingATask = (obj) => {
  let displayMessage = document.createElement("li");
  displayMessage.innerHTML = `
    <input class="checkbox" type="checkbox">
    <label for="index">${obj.todo}</label>   
    <button class="delete">❌</button>
    `;
  const checkbox = displayMessage.querySelector(".checkbox"); //нашли чек бокс
  const deleteOne = displayMessage.querySelector(".delete"); // нашли делете
  //тут же прослушки на события
  checkbox.addEventListener("change", () => taggleCheck(obj.id));
  checkbox.checked = obj.checked;
  deleteOne.addEventListener("click", () => DelOne(taggleCheck(obj.id)));
  return displayMessage;
}

//функция замена чекет
function taggleCheck(id) {
  // нахожу обьекты по йди
  let idValue = toDoList.find((elem) => elem.id === id);
  // меняю их чекет на противоположный 
  idValue.checked = !idValue.checked;
  paintTasc();
}

// функция перебора и отрисовки li  в  listContainer
function paintTasc() {
  listContainer.innerHTML = "";
  // сохраняем наше дело в локол стореч при это не забывааем переделать обьект в строку
  localStorage.setItem(KEY_KEY , JSON.stringify(toDoList));
  toDoList.forEach(function (elem) {
    listContainer.append(creatingATask(elem));
    //зачистка инпута после добавления дела
    document.getElementById("inputRecord").value = "";
  });
}

//функция удаления завершонных дел
let remoteCompleted = () => {
  toDoList = toDoList.filter((el) => el.checked !== true);
  paintTasc();
}

//функция удаления всех дел 
let deleteToDoList = () => {
  toDoList = [];
  paintTasc();
  
}
//функция удаления на кнопку крестик
function DelOne(id) {
  let myIndex = toDoList.findIndex((el) => el.id === id);
  toDoList.splice(myIndex, 1);
  paintTasc();
}



console.log(toDoList);
paintTasc();

//прослушки
addRecord.addEventListener("click", preservation);
deleteСompleted.addEventListener("click", remoteCompleted);
deleteEverything.addEventListener("click", deleteToDoList);

