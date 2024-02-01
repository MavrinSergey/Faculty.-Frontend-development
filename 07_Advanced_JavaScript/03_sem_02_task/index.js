// Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. Посетители сайта могут выбирать
// разные элементы мебели, цвета и материалы для своего гарнитура. После того как пользователь собрал свой комплект
// и сохраняет свой выбор, информация о нем сохраняется в куки. При следующем посещении сайта их индивидуальные
// настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.
//
// 1. Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и возможными
// параметрами для них (цвет, материал, дизайн).
// 2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
// 3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий
// выбор пользователя в куки.
// 4. При следующем посещении сайта автоматически загрузите сохраненные параметры из куки и отобразите ранее
// созданный комплект.
// 5. Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить куки).

const saveBtn = document.querySelector("#save-btn");
const loadBtn = document.querySelector("#load-btn");
const clearBtn = document.querySelector("#clear-btn");
const tableSelectEl = document.querySelector("#table-color");
const chairSelectEl = document.querySelector("#chair-material");

saveBtn.addEventListener("click", saved);
loadBtn.addEventListener("click", loaded);
clearBtn.addEventListener("click", cleared);

function saved(event) {
    Cookies.set('tableConfig', tableSelectEl.value);
    Cookies.set('chairConfig', chairSelectEl.value);
    alert("настройки сохраненны")
}

function loaded(event) {
    if (!Cookies.get("tableConfig")) {
        return alert("печенек нет")
    }
    tableSelectEl.value = Cookies.get("tableConfig")
    chairSelectEl.value = Cookies.get("chairConfig")
    alert("настройки загружены")
}

function cleared(event) {
    Cookies.remove("tableConfig")
    Cookies.remove("chairConfig")
    alert("Съели все печеньки)")
}
document.addEventListener("DOMContentLoaded", loaded)