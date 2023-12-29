const url = "https://jsonplaceholder.typicode.com/users";

let response = await fetch(url);
let data = await response.json();
const cardEl = document.querySelector(".cards");
const btnDel = document.querySelector(".btn_del")

data.forEach((element => {
    cardEl.insertAdjacentHTML("beforeend", getSection(element))
}))
btnDel.addEventListener("click", usersDel);


function getSection(obj) {
    return `<div class="card">
                <input type="checkbox" name="${obj.id}" id="${obj.id}">
                <p>${obj.name}</p>
                <p>${obj.email}</p>
                <p>${obj.address.city} ${obj.address.street} ${obj.address.suite}</p>
                <p>${obj.phone}</p>
                <p>${obj.website}</p>
                <p>${obj.company.name}</p>
            </div>`
}
function usersDel() {
    const items = document.querySelectorAll(
        ".card"
    );

    items.forEach((item) => {
        const check = item.querySelector("input");
        if (check.checked === true) {
            item.remove();
        }
    });
}