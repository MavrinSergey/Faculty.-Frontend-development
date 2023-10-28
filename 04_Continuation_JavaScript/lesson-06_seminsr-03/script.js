// 1) В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// document.addEventListener("DOMContentLoaded", () => console.log('страница загрузилась'));
//
// const btn = document.querySelector('.btn');
// btn.onclick = () => {
//     console.log('событие oncklick')
// };
// btn.addEventListener('click', () => {
//     console.log('событие addEventListener')
// });


// 2)Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const btns = document.querySelectorAll('.btn');
//
// btns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//         console.log(btn)
//     })
// })
//
// const btn4 = document.querySelector('.btn-count');
// let count = 0;
// btn4.addEventListener('click', () => {
//         console.log(++count);
//     })
// const btn5 = document.createElement('button');
// btn5.textContent = '5'
// const body = document.querySelector('body');
// body.insertAdjacentElement('beforeend', btn5);
// btn5.addEventListener('click', () => {
//     btn5.textContent = 'Вы нажали на эту кнопку';
// })

// 3)Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок,
// данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” ,
// как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const btn = document.querySelector('button');
// btn.addEventListener('click', addHeader);
//
// function addHeader() {
//     const heading = document.createElement('h1');
//     heading.textContent = 'Новый заголовок';
//     btn.insertAdjacentElement('afterend', heading);
//     const btnDel = document.createElement('button');
//     btnDel.textContent = 'Удалить заголовок';
//     btn.insertAdjacentElement('afterend', btnDel);
//     btnDel.addEventListener('click', () => {
//         heading.remove()
//         btnDel.remove();
//     });
// }
//
//
// const btn3 = document.createElement('button');
// btn3.textContent = 'наведи на меня'
// btn.insertAdjacentElement('afterend', btn3);
// btn3.addEventListener('mouseover', () => {
//     console.log('вы навели на данную кнопку')
// });
// btn3.addEventListener('mouseout', () => {
//     console.log('Наведения на кнопку больше нет')
// });

// 4) Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

const ul = document.querySelector('ul')

const addElList = document.createElement('button')
addElList.textContent = 'добавить элемент'
addElList.addEventListener('click', () => {
    ul.insertAdjacentHTML('afterbegin', `<li>новый элемент списка</li>`)
})
document.querySelector('body').prepend(addElList)

const DelFirstElList = document.createElement('button')
DelFirstElList.textContent = 'удалить первый эелемент'
DelFirstElList.addEventListener('click', () => {
    document.querySelector('ul>li').remove()
})
document.querySelector('body').prepend(DelFirstElList)


const addClassBtn = document.createElement('button')
addClassBtn.textContent = 'добавить класс клик'
addClassBtn.addEventListener('click', () => {
    addClassBtn.classList.toggle('click')
})
document.querySelector('body').prepend(addClassBtn)