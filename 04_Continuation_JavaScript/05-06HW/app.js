document.addEventListener("DOMContentLoaded", function () {
    const items = JSON.parse(data);
    const subHeader = document.querySelector(".fetured__sub-header");
    const createItemsEl = document.createElement("div");
    createItemsEl.classList.add("fetured__items");

    items.forEach((item) => {
        createItemsEl.insertAdjacentHTML("beforeend", createItem(item.img, item.head, item.descriptions, item.price, item.id));
    })
    subHeader.insertAdjacentElement("afterend", createItemsEl);

    const itemsEl = document.querySelectorAll(".item");
    itemsEl.forEach((item) => {
        item.addEventListener("click", (event) => {
            const id = event.currentTarget.dataset["id"];
            const item = items.filter((item) => item["id"] === id)[0];
            openCart(item);
        })
    })

    function createItem(img, head, descriptions, price, id) {
        return `
    <div class="item" data-id="${id}">
        <div class="item__image">
            <img src="${img}" alt="${head}" />
        </div>
        <div class="item-head">${head}</div>
        <div class="desc">${descriptions}</div>
        <div class="price">${price}</div>
    </div>
    `
    }

});