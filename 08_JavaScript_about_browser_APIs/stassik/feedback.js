const errorEl = document.querySelector('.error-message');
const listProductsEl = document.querySelector('.products__list');
const feedbackList = document.querySelector('.feedback__list');

document.addEventListener('DOMContentLoaded', () => {
    try {
        if (localStorage.length === 0) {
            throw new Error('Еще нет ни одного отзыва.');
        }
        Object.entries(localStorage).forEach(([key, value]) => {
            listProductsEl.insertAdjacentHTML('beforeend',
                `<li class="products__item">
                    <div class="product__descr">
                        <p class="product__text">${key}</p>
                        <button class="feedback__btn feedback_link">Посмотреть отзывы</button>
                    </div>
                </li>
            `);
        });
        btnCheckEvent();



    } catch (error) {
        errorEl.textContent = error.message;
    }
})

function btnCheckEvent() {
    const btnChekList = document.querySelectorAll('.feedback_link');
    btnChekList.forEach(btnChek => {
        btnChek.addEventListener('click', (e) => {
            const eventItem = e.target.parentNode;
            const productName = eventItem.querySelector('.product__text');
            const feedbackArray = JSON.parse(localStorage.getItem(productName.innerText));
            feedbackList.innerHTML = "";

            feedbackArray.forEach(feedbackItem => {
                feedbackList.insertAdjacentHTML('beforeend',
                    `<li class="feedback__item">
                        <p class="feedback__text">${feedbackItem}</p>
                        <button class="feedback__btn feedback_del">Удалить отзыв</button>
                    </li>
                `);
            });
            btnDelEvent(feedbackArray, productName, eventItem);
        });
    });


}

function btnDelEvent(feedbackArray, productName, eventItem) {
    const btnDelList = document.querySelectorAll('.feedback_del');
    btnDelList.forEach(btnDel => {
        btnDel.addEventListener('click', (el) => {
            const eventParent = el.target.parentNode;
            const eventFeedback = eventParent.querySelector('.feedback__text');

            feedbackArray.splice(feedbackArray.indexOf(eventFeedback.innerText), 1);
            eventParent.remove();
            localStorage.setItem(productName.innerText, JSON.stringify(feedbackArray));

            if (feedbackArray.length == 0) {
                localStorage.removeItem(productName.innerText);
                eventItem.parentNode.remove();
                feedbackList.innerHTML = '<li>Для просмотра отзывов выбирете товар</li>';
            }
        })
    });
}