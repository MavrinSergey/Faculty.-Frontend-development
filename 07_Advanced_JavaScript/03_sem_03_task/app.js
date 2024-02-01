// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и
// входить в систему, используя данные, сохраненные в LocalStorage.
//     Приложение будет состоять из трёх основных страниц:
//     1. Страница регистрации:
//     1. Предлагает пользователю ввести логин и пароль.
// 2. После ввода данных, они сохраняются в LocalStorage.
// 3. Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
//     1. Предлагает пользователю ввести логин и пароль.
// 2. Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется на страницу приветствия.
// 3. Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
//     1. Простое приветственное сообщение для авторизованного пользователя.
// 2. Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.


const submitBtn = document.querySelector(".register-btn");

if (submitBtn) {
    submitBtn.addEventListener("click", function () {
        localStorage.setItem("userName", document.querySelector(".username-input").value)
        localStorage.setItem("password", document.querySelector(".password-input").value)
        window.location.href = "indexEnter.html"
    })
}

const loginBtn = document.querySelector(".login-btn");
if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        if (document.querySelector(".username-input").value === localStorage.getItem("userName")
            && document.querySelector(".password-input").value === localStorage.getItem("password")) {
            window.location.href = "indexHello.html"
        } else console.log("нет такого пользователя")
    })
}

const logoutBtn = document.querySelector(".logout-btn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        window.location.href = "indexEnter.html"
    })
}