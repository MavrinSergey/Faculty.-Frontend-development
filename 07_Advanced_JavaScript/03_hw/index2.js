//     Страница просмотра отзывов:
//
//     Показывает список всех продуктов, о которых были оставлены отзывы.
//     При клике на название продукта отображается список всех отзывов по этому продукту.
//     Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется
//     из LocalStorage).
const localStorageKey = "allView";
const redux = JSON.parse(localStorage.getItem(localStorageKey))
const reviewsEl = document.querySelector(".reviews");

for (key in redux) {
    reviewsEl.insertAdjacentHTML("beforeend",
        `
        <div class="reviews__product">
            <h2 class="reviews__title">${key}</h2>
            <ul class="reviews__list"></ul>
        </div>`
    )
}

reviewsEl.addEventListener("click", function ({target}) {
    if (target.matches(".reviews__title")) {
        const nameProduct = target.textContent;
        const fatherEl = target.closest(".reviews__product");
        const listReviews = fatherEl.querySelector(".reviews__list");
        if (listReviews.innerHTML !== "") {
            listReviews.innerHTML = "";
        } else {
            redux[nameProduct].forEach(item => {
                listReviews.insertAdjacentHTML("beforeend",
                    `
                <li class="reviews__item">
                    <p class="review-text">${item}</p>
                    <button class="btn-del-review">удалить отзыв</button>
                </li>`)
            })
        }
        console.log(listReviews.innerHTML)
    } else if (target.matches(".btn-del-review")) {
        const fatherEl = target.closest(".reviews__item");
        const textReview = fatherEl.querySelector(".review-text").textContent;
        const nameProduct = target.closest(".reviews__product").querySelector(".reviews__title").textContent;
        fatherEl.remove()
        const indexEl = redux[nameProduct].findIndex(item => {
            return (item === textReview);
        })
        redux[nameProduct].splice(indexEl, 1);
        (redux[nameProduct].length === 0) ? (delete redux[nameProduct]) : saveData(redux);
        saveData(redux)
    }
})

function saveData(obj) {
    localStorage.setItem(localStorageKey, JSON.stringify(obj))
}