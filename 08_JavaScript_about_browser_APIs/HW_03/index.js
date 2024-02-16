// • Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь
//      загружает страницу. Обратите внимание, что должно подгружаться всегда случайное изображение, для этого есть отдельная
//      ручка (эндпоинт) у API.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться
//      на единицу. Одну фотографию пользователь может лайкнуть только один раз. Также должна быть возможность снять лайк,
//      если ему разонравилась картинка.
// • Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик
//      не сбрасывался, если будет показана та же самая картинка.
// • Реализуйте возможность просмотра предыдущих фото с сохранением их в истории просмотров в localstorage.
// • Реализовать все с помощью async/await, без цепочек then.

const client_id = `uSZlfs71Nt9pUxPdUy-ek7xdc7Ban1lGVQs0iw02NTg`;
const access_token = "DdZuaj2MYhziO9LMBlS-aQRjQfxWcnHpM8B39hh3ex0";
const token_type = "Bearer";
const refresh_token = "goPQ9GJSE_NHD4VW-XwYsmMaVMbkO6CayWfZAKdCEPs";
const scope = "public read_user write_user read_photos write_photos write_likes write_followers read_collections write_collections";
const created_at = 1708023283;
const user_id = 10848739;
const username = "mavrinsergey";


let checkedLikes = false;
let historyPhoto = {
    count: 0,
    history: []
};
if (localStorage.getItem("historyPhoto")) {
    historyPhoto.history = JSON.parse(localStorage.getItem("historyPhoto"))
    historyPhoto.count = historyPhoto.history.length - 1;
    console.log(historyPhoto.history)
}
const photoContentEl = document.getElementById("photo-container");
const btnPrevEl = document.getElementById("prev");
const btnNextEl = document.getElementById("next");

generateDataForRender();
btnPrevEl.addEventListener("click", function () {
    if (historyPhoto.count > 0) {
        historyPhoto.count -= 1;
        render(historyPhoto.history[historyPhoto.count])
    }
})
btnNextEl.addEventListener("click", async function () {
    if (historyPhoto.count < historyPhoto.history.length - 1) {
        historyPhoto.count += 1;
        render(historyPhoto.history[historyPhoto.count])
    } else {
        generateDataForRender();
    }
})


const likeEl = document.querySelector(".like");
likeEl.addEventListener("click", async ({target}) => {
    const fatherEl = target.closest(".photo");
    const likesNumEl = fatherEl.querySelector(".like-number");
    const id = fatherEl.dataset.id;
    const svg = fatherEl.querySelector("svg");
    const photo = await LikesFetch(id, checkedLikes);
    console.log(photo)
    checkedLikes = true;
    likesNumEl.innerText = photo.likes;
    if (!photo.liked_by_user) {
        console.log("лайкнул", photo.liked_by_user)
        svg.style.fill = "#000";
    } else if (photo.liked_by_user) {
        console.log("лайкнул", photo.liked_by_user)
        svg.style.fill = "red";
    }
})

async function generateDataForRender() {
    try {
        const photoData = await getImagesFetch();
        console.log(photoData)
        checkedLikes = photoData.liked_by_user;
        historyPhoto.history.push(photoData);
        historyPhoto.count += 1;
        localStorage.setItem('historyPhoto', JSON.stringify(historyPhoto.history));
        render(photoData);
    } catch
        (err) {
        alert(err);
    }
}

async function LikesFetch(id, checkedLikes) {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/${id}/like`
            , {
                method: `${checkedLikes ? "DELETE" : "POST"}`,
                headers: {
                    Authorization: `${token_type} ${access_token}`,
                }
            })
        if (!response.ok) {
            throw new Error("Сервер встал")
        }
        const res = await response.json();
        return res.photo
    } catch (err) {
        throw err
    }
}

async function getImagesFetch() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${user_id}`,
            {
                method: 'GET',
                headers: {
                    Authorization: `${token_type} ${access_token}`,
                }
            })
        if (!response.ok) {
            throw new Error("Сервер встал")
        }
        return await response.json();
    } catch (err) {
        throw err
    }
}


function render(photo) {
    const html = showPicture(photo);
    photoContentEl.innerHTML = "";
    photoContentEl.insertAdjacentHTML("beforeend", html);
}

function showPicture(photo) {
    const color = photo.liked_by_user ? "red" : "#000000"
    return `
            <figure class="photo" data-id="${photo.id}">
              <img src="${photo.urls.small}" />
              <figcaption>Фото сделал ${photo.user.name}</figcaption>
              <p>
                  <span class="like"><svg fill=${color} height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 471.701 471.701" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path> </g> </g></svg></span>
                  <span class="like-number">${photo.likes}</span>
              </p>
            </figure>
    `
}
