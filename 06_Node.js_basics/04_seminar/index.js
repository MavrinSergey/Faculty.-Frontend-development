const express = require("express");
const path = require("path");
const fs = require("fs");
const {validateUsers} = require("./joi")


const app = express();
const pathDB = path.join(__dirname, 'users.json'); // путь до файла с БД
const pathUsersId = path.join(__dirname, 'id.json'); // путь до файла с id Users


app.use(express.json()); // преобразует входящие запросы в JSON

/**
 * Отдаем список всех пользователей
 */
app.get('/users', (req, res) => {
    res.send(fs.readFileSync(pathDB));
});
/**
 * Отдаем конкретного пользователя по ID, если такой существуе
 */
app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathDB)); //
    const user = users.find((user) => user.id === Number(req.params.id));

    if (user) {
        res.send({user});
    } else {
        res.status(404);
        res.send({user: null});
    }
});
/**
 * Добавляем пользователя, предварительного валидируем полученные данные, увеличиваем id, формируем данные и отправляем в БД
 */
app.post('/users', (req, res) => {
    validateUsers(req.body, res);
    const uniqueID = getCountIdUser(pathUsersId);
    const users = JSON.parse(fs.readFileSync(pathDB));

    users.push({
        id: uniqueID.id,
        ...req.body
    });

    fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
    fs.writeFileSync(pathUsersId, JSON.stringify(uniqueID));

    res.send({
        id: uniqueID,
    });
});

app.put('/users/:id', (req, res) => {
    validateUsers(req.body, res);
    const users = JSON.parse(fs.readFileSync(pathDB));
    let user = users.find((user) => user.id === Number(req));

    if (user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.city = req.body.city;
        fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
        res.send({user});
    } else {
        res.status(404);
        res.send({user: null});
    }
});
app.delete('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathDB));
    let user = users.find((user) => user.id === Number(req));

    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
        res.send({user});
    } else {
        res.status(404);
        res.send({user: null});
    }
});
app.listen(3000);


function getCountIdUser(pathUsersId) {
    let uniqueID = JSON.parse(fs.readFileSync(pathUsersId));
    uniqueID.id += 1;
    return uniqueID;
}

