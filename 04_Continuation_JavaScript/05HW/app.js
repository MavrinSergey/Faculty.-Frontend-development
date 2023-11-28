const items = JSON.parse(data);
const subHeader = document.querySelector(".fetured__sub-header");
const itemsEl = document.createElement("div");
itemsEl.classList.add("fetured__items");

items.forEach((item) => {
    itemsEl.insertAdjacentHTML("beforeend", createItem(item.img, item.head, item.descriptions, item.price));
})

subHeader.insertAdjacentElement("afterend", itemsEl);

function createItem(img, head, descriptions, price) {
    return `
    <div class="item">
        <img src="${img}" alt="${head}" />
        <div class="item-head">${head}</div>
        <div class="desc">${descriptions}</div>
        <div class="price">${price}</div>
    </div>
    `
}