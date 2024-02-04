// // Задание 1.
// // 1. Необходимо выводить на страницу текущую ширину
// // и высоту окна браузера, при изменении значений, вывод
// // также должен меняться.
const sizeDesktopEl = document.querySelector(".size-desktop");
printDesktopSize()

window.addEventListener("resize", printDesktopSize);

function printDesktopSize() {
    const width = window.outerWidth;
    const height = window.outerHeight;
    sizeDesktopEl.innerHTML = `
    <p>ширина экрана: ${width}</p>
    <p>высота экрана: ${height}</p>
`
}
//
// // 2. При закрытии страницы (вкладки), необходимо выводить
// // всплывающее окно или диалоговое окно браузера и
// // спросить, уверен ли пользователь, что хочет покинуть
// // страницу?
//
// window.addEventListener("beforeunload", (event)=>{
//     event.preventDefault()
//     confirm("Вы уверены что хотите выйти?")
// })
// //     3. Используйте объект history для управления историей
// // переходов на веб-странице. Создайте кнопки "Назад" и
// // "Вперед" для перемещения по истории.
// history.back()
// history.forward()

// Задание 2
// Даны html и css:
//     <style>
//         .box {
//         width: 100px;
//         height: 100px;
//         background-color: lightblue;
//         margin: 10px;
//         display: inline-block;
//     }
//     </style>
//
// <button id="addButton">Добавить элемент</button>
// <button id="removeButton">Удалить элемент</button>
// <button id="cloneButton">Клонировать элемент</button>
// <div id="container">
//     <div class="box">1</div>
//     <div class="box">2</div>
//     <div class="box">3</div>
// </div>

// Необходимо создать страницу, в которой будут работать
// все три кнопки.
// - При нажатии на кнопку "Добавить элемент" на страницу
// добавляется новый квадратный элемент (<div>) с размерами
//     100x100 пикселей. Этот элемент должен иметь класс .box
//     и содержать текст, указывающий порядковый номер элемента
//     (1, 2, 3 и так далее).
//     - При нажатии на кнопку "Удалить элемент" удаляется
//     последний добавленный элемент, если таковой имеется.
//     - При нажатии на кнопку "Клонировать элемент" создается
//     копия последнего добавленного элемента и добавляется на
//     страницу. Если последнего добавленного элемента нет на
//     странице, необходимо вывести сообщение в alert, с надписью
//     о невозможности клонирования, так как клонировать нечего.


// const btnAddEl = document.querySelector("#addButton");
// const btnRemoveEl = document.querySelector("#removeButton");
// const btnCloneEl = document.querySelector("#cloneButton");
// const containerEl = document.querySelector("#container");
//
// btnAddEl.addEventListener("click", ()=>{
//     const nextNum = containerEl.children.length + 1;
//     containerEl.insertAdjacentHTML("beforeend", `<div class="box">${nextNum}</div>`)
// })
// btnRemoveEl.addEventListener("click", ()=>{
//     containerEl.lastElementChild?.remove()
// })
//
// btnCloneEl.addEventListener("click", ()=>{
//     const newBox = containerEl.lastElementChild?.cloneNode(true);
//     if (newBox) {
//         containerEl.insertAdjacentElement("beforeend", newBox)
//     } else {
//         alert("Нечего клонировать, сначала создайте квадрат.")
//     }
// })

// Задание 3.
// Необходимо создать страницу со списком статей.
//     Каждая статья состоит из id, заголовка, текста статьи.
//     id - будем брать из unix timestamp.
//     Необходимо подготовить список статей в JSON-формате,
//     которые будут выводиться на странице при первом ее
// открытии.
//     Необходимо реализовать возможность удаления статьи.
//     Необходимо реализовать возможность добавления статьи.
//     Необходимо реализовать возможность изменения статьи,
//     ввод данных можно реализовать через prompt.
//     Статьи должны сохраняться в локальное хранилище
// браузера, и должны быть доступны после перезагрузки
// страницы.
const localStorageKey = "articles";
const initialArticles = `[
    {
    "id": 1706896947721,
    "title": "header",
    "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam!"
    },
    {
    "id": 1706896948000, 
    "title": "superHEADER", 
    "text": "Lorem ipsum r sit ur adipisicing elit. Odit, veniam!"
    }
]`
if (!localStorage.getItem(localStorageKey)) {
    localStorage.setItem(localStorageKey, initialArticles)
}
const articles = JSON.parse(localStorage.getItem(localStorageKey));
const listArticleEl = document.querySelector(".list-article");
const btnAddedArticleEl = document.querySelector(".btnAdd");

articles.forEach(item => {
    addedArticle(item)
})
btnAddedArticleEl.addEventListener("click", ()=> {
    const title = prompt("Введите заголовок статьи")
    const text = prompt("Введите текст статьи")
    const newArticle = {id: Date.now(), title: title, text: text};
    addedArticle(newArticle)
    articles.push(newArticle)
    saveData(articles)
})
listArticleEl.addEventListener('click', ({target})=>{
    if (target.matches(".btnDell")) {
        const fatherEl = target.closest(".article");
        fatherEl.remove() // поднимается вверх пока ненайдет селектор

        const indexEl = articles.findIndex(item => {
            return (item.id === +fatherEl.dataset.id);
        })
        articles.splice(indexEl, 1);
        saveData(articles)
    }
    else if (target.matches(".btnRef")) {
        const fatherEl = target.closest(".article");
        const titleEl = fatherEl.querySelector(".title");
        const textEl = fatherEl.querySelector(".text");
        const title = titleEl.textContent;
        const text = textEl.textContent;
        const newTitle = prompt("Введите заголовок статьи", title)
        const newText = prompt("Введите текст статьи", text)
        titleEl.textContent = newTitle;
        textEl.textContent = newText;

        const resArticle = articles.find(item => {
            return (item.id === +fatherEl.dataset.id);
        })
        resArticle.title = newTitle;
        resArticle.text = newText;
        saveData(articles)
    }
})
function addedArticle(item) {
    listArticleEl.insertAdjacentHTML("beforeend", `
            <div class="article" data-id="${item.id}">
                <div class="title">${item.title}</div>
                <div class="text">${item.text}</div>
                <button class="btnDell">Удалить статью</button>
                <button class="btnRef">Изменение статьи</button>
            </div>
    `)
}
function saveData(array) {
    localStorage.setItem(localStorageKey, JSON.stringify(array))
}