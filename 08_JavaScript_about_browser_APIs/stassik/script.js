/**
 *
 Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

Страница добавления отзыва:

Поле для ввода названия продукта.
Текстовое поле для самого отзыва.
Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

Страница просмотра отзывов:

Показывает список всех продуктов, о которых были оставлены отзывы.
При клике на название продукта отображается список всех отзывов по этому продукту.
Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).
 */


// localStorage.clear();
const url = './products.json';
const listProductsEl = document.querySelector('.products__list');
const errorEl = document.querySelector('.error-message');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
let inputName = modal.querySelector('.form__input[name="name"]');
const inputText = modal.querySelector('textarea');
const modalBtn = modal.querySelector('.form__btn');
const modalError = modal.querySelector('.modal__error');


async function getProducts(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data || Math.random() < 0.2) {
            throw new Error('Ошибка базы данных');
        }
        generateItemElements(data);
    } catch (error) {
        errorEl.textContent = error.message;
    }
}


function generateItemElements(data) {
    for (let i = 0; i < 6; i++) {
        const product = Object.values(data)[i];
        listProductsEl.insertAdjacentHTML('beforeend',
            `<li class="products__item">
            <div class="product__img-box">
                <img src="${product.image.url}" alt="product image" class="product__img">
            </div>
            <div class="product__descr">
                <p class="product__text">${product.name}</p>
                <button class="feedback__btn feedback_added">Оставить отзыв</button>
            </div>
        </li>
        `);
    }
}


function addBtnEvent(itemsProduct) {
    itemsProduct.forEach(item => {
        const btn = item.querySelector('.feedback_added');
        btn.addEventListener('click', (e) => {
            const eventItem = e.target.parentNode.parentNode;
            const productName = eventItem.querySelector('.product__text');
            overlay.style.display = 'block';
            modal.style.display = 'flex';
            inputName.value = productName.innerText;
        });
    });
}

async function waitUntilProductsLoaded(url) {
    await getProducts(url);

    const itemsProduct = listProductsEl.querySelectorAll('.products__item');
    console.log(itemsProduct)
    addBtnEvent(itemsProduct);
}

waitUntilProductsLoaded(url);
modalBtn.addEventListener('click', () => {
    try {
        if (!inputName.value || !inputText.value) {
            throw new Error('Заполните все поля!');
        }
        if (localStorage.length === 0) {
            const feedbackArray = [];
            feedbackArray.push(inputText.value);
            localStorage.setItem(inputName.value, JSON.stringify(feedbackArray));
        } else {
            let res = false;
            for (const key in localStorage) {
                if (key === inputName.value) {
                    res = true;
                    const feedbackArray = JSON.parse(localStorage.getItem(inputName.value));
                    feedbackArray.push(inputText.value);
                    localStorage.setItem(inputName.value, JSON.stringify(feedbackArray));
                }
            }
            if (res === false) {
                feedbackArray = [];
                feedbackArray.push(inputText.value);
                localStorage.setItem(inputName.value, JSON.stringify(feedbackArray));
            }

        }
        overlay.style.display = "none";
        modal.style.display = "none";
    } catch (error) {
        modalError.textContent = error.message;
    }
});


const btn = document.querySelector('.feedback_link');
btn.addEventListener('click', () => {
    window.location.href = './feedback.html'
});


overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    modal.style.display = 'none';
});





