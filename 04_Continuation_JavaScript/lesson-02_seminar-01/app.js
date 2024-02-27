// <div id="block">
//     <p>1</p>
//     <p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p className="www">text 1</p>
// <p className="www">text 2</p>

// const text = document.querySelector('#block p:first-child');
// console.log(text);
//
// const text2 = document.getElementById('block').children[0];
// console.log(text2);
//
// const text3 = document.querySelector('.www');
// console.log(text3);
//
// const text4 = document.getElementsByClassName('www')[0];
// console.log(text4);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
//     Дан тег <img class="photo" src="" alt="">
//     Вам необходимо с помощью js поменять значение src на любое изображение из интернета
// const href = document.querySelector('.link');
// href.href = "https://developer.mozilla.org/ru/";
// href.textContent = "новый текст ссылки";
// href.inner = "новый текст ссылки";
// console.log(href);
//
// const img = document.querySelector('.photo');
// img.src = "./img/fotoMain.png";
// img.alt = "красивое фото";
//
// const image = document.querySelector(".photo");
// image.setAttribute("src", "https://alexdev.ru/wp-content/uploads/2015/06/JS-logo.png");

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// const content = document.querySelector(".content");
// const btnAdd = document.querySelector(".add");
// const btnDel = document.querySelector('.del');
//
//
// btnAdd.addEventListener("click", ()=> {
//     const newP = document.createElement('p');
//     newP.textContent = "Новый текстовый элемент";
//     content.insertAdjacentElement("afterbegin", newP);
// })
//
// btnDel.addEventListener("click", ()=> {
//     const newP = document.querySelector('p');
//     content.removeChild(newP);
// })

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const content = document.querySelector(".content");
// content.insertAdjacentHTML("afterbegin", "<button>click me</button>");
// const btn = document.querySelector("button");
// let count = 0;
// btn.addEventListener("click", () => {
//     count++;
//     const lastTwoDigits = Math.abs(count % 100);
//     if (count >= 5 && count <= 20) {
//         console.log(`Вы нажали ${count} раз`);
//     } else if (count === 1) {
//         console.log(`Вы нажали ${count} раз`);
//     } else if (count < 5) {
//         console.log(`Вы нажали ${count} раза`);
//     } else {
//         console.log(`Вы нажали ${count} раз`);
//     }
// });

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
// Создать вторую кнопку, при клике на которую должен появляться параграф с произвольным текстом.
//     При нажатии на вторую кнопку еще раз, текст должен пропадать.

const content = document.querySelector(".content");
content.insertAdjacentHTML("afterbegin", "<button>click me</button>");
const btn = document.querySelector("button");
btn.textContent = "отправить";

btn.addEventListener("click", () => {
    btn.textContent = "Текст отправлен";
});

content.insertAdjacentHTML(
    "afterbegin",
    "<button class='qw'>click me</button>"
);
const btn2 = document.querySelector(".qw");
const newP = document.createElement("p");
newP.textContent = "Новый текстовый элемент";

const divContent = document.querySelector(".content");
const someParagraph = document.createElement("p");
someParagraph.textContent = "Some text in paragraph";

const button = document.createElement("button");
button.textContent = "Send";
button.onclick = () => {
    button.textContent = "Text sent!";
};

const anotherButton = document.createElement("button");
anotherButton.state = "not-clicked";
anotherButton.textContent = "Show text";
anotherButton.onclick = () => {
    if (anotherButton.state === "not-clicked") {
        anotherButton.state = "clicked";
        anotherButton.textContent = "Hide text";
        divContent.append(someParagraph);
        return;
    }
    anotherButton.state = "not-clicked";
    anotherButton.textContent = "Show text";
    divContent.removeChild(someParagraph);
};

divContent.append(button);
divContent.append(anotherButton);

const a = ``;
