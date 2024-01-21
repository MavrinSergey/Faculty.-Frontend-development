const express = require("express");
const app = express();
const {counterHome, counterAbout} = require("./counter");


app.get('/', (req, res) => {
    res.send(`<h1>Добро пожаловать на главную страницу!</h1>
                 <h2>Вы зашли на эту страницу ${counterHome('home')} раз</h2>
                 <p>Перейти на страницу <a href="./about">Обо мне</a></p>`);
});
app.get('/about', (req, res) => {
    res.send(`<h1>Добро пожаловать на страницу обо мне!</h1>
                 <h2>Вы зашли на эту страницу ${counterAbout('about')} раз</h2>
                 <p>Перейти на <a href="/">главную</a> страницу</p>`);
});
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})
app.listen(3000);