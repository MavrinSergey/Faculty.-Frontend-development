const redux = {
    increasesTheNumberOfParticipants(id) {
        const item = this.findsActivity(id);
        if (item.currentParticipants < item.maxParticipants) {
            item.currentParticipants += 1;
            console.log("прибавили 1 ")
        }
    },
    reducesTheNumberOfParticipants(id) {
        const item = this.findsActivity(id);
        if (item.currentParticipants < item.maxParticipants) {
            item.currentParticipants -= 1;
            console.log("убавили 1 ")
        }
    },
    findsActivity(id) {
        let res
        this.timeTableOfClasses.forEach(item => {
            if (item.id == id) {
                res = item;
                console.log("нашли элемент по id")
            }
        })
        return res;
    }
};
const localStorageKeyClasses = "TimetableOfClasses";
const localStorageKeyUser = "User";
const initialListClasses = `[
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    },
    {
        "id": 6,
        "name": "Боксдд",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 8
    }
]`
const initialUserData = {}
if (!localStorage.getItem(localStorageKeyClasses)) {
    localStorage.setItem(localStorageKeyClasses, initialListClasses);
}
redux.timeTableOfClasses = JSON.parse(localStorage.getItem(localStorageKeyClasses));
redux.timeTableOfClasses.forEach(item => {
    initialUserData[item.id] = false;
})
console.log(initialUserData)
if (!localStorage.getItem(localStorageKeyUser)) {
    localStorage.setItem(localStorageKeyUser, JSON.stringify(initialUserData))
}

redux.user = JSON.parse(localStorage.getItem(localStorageKeyUser));
const tableContentEl = document.querySelector(".table__content");
// следующий цикл не объединил с предыдущим так как они выполняют разные задачи
redux.timeTableOfClasses.forEach(item => {
    addsAnActivityInDOM(item, redux.user[item.id])
})
console.log("создали данные в localStorage и занесли их в redux")
console.log(redux.user)
tableContentEl.addEventListener("click", ({target}) => {
    const fatherEl = target.closest(".table__row");
    const id = fatherEl.dataset.id
    const item = redux.findsActivity(id)
    console.log(item)
    if (target.matches(".btn_sign-up") && item.maxParticipants !== item.currentParticipants && redux.user[id] === false) {
        console.log("нажали кнопку записаться")
        redux.increasesTheNumberOfParticipants(id);
        redux.user[id] = true;
        fatherEl.insertAdjacentHTML("beforebegin", rowComponent(redux.findsActivity(id), !redux.user[id], redux.user[id]))
        fatherEl.remove()
        saveData();

    } else if (target.matches(".btn_cancel-registration")) {
        if (redux.user[id] === true) {
            redux.reducesTheNumberOfParticipants(id);
            redux.user[id] = false;
            fatherEl.insertAdjacentHTML("beforebegin", rowComponent(redux.findsActivity(id), !redux.user[id], redux.user[id]))
            fatherEl.remove()
            saveData();
        }
    }
})

function addsAnActivityInDOM(item, check,) {
    if (item.maxParticipants === item.currentParticipants && check === false) {
        tableContentEl.insertAdjacentHTML("beforeend", rowComponent(item, false, false))
    } else {
        tableContentEl.insertAdjacentHTML("beforeend", rowComponent(item, !check, check))
    }
}

function rowComponent(item, checkForBtnSignUp, checkForBtnCancelReg) {
    return `
        <tr class="table__row" data-id="${item.id}">
            <td class="table__cell">${item.name}</td>
            <td class="table__cell">${item.time}</td>
            <td class="table__cell">${item.maxParticipants}</td>
            <td class="table__cell">${item.currentParticipants}</td>
            <td class="table__cell">
                <button class="btn btn_sign-up registered-${checkForBtnSignUp}">Записаться</button>
            </td>
            <td class="table__cell">
                <button class="btn btn_cancel-registration registered-${checkForBtnCancelReg}">Отменить запись</button>
            </td>
        </tr>`
}

function saveData() {
    localStorage.setItem(localStorageKeyClasses, JSON.stringify(redux.timeTableOfClasses))
    localStorage.setItem(localStorageKeyUser, JSON.stringify(redux.user))
}
