const http = require("http");
const { counterHome, counterAbout } = require("./counter");

console.log(http);
const server = http.createServer((req, res) => {
    console.log("Запрос получен");

    if (req.url === '/') {
        res.writeHead(
            200,
            {'Content-Type': 'text/html; charset=UTF-8'}
        );
        res.end(`<h1>Добро пожаловать на главную страницу!</h1>
                 <h2>Вы зашли на эту страницу ${counterHome()} раз</h2>
                 <p>Перейти на страницу <a href="./about">Обо мне</a></p>`);

    } else if (req.url === '/about') {
        res.writeHead(
            200,
            {'Content-Type': 'text/html; charset=UTF-8'}
        );
        res.end(`<h1>Добро пожаловать на страницу обо мне!</h1>
                 <h2>Вы зашли на эту страницу ${counterAbout()} раз</h2>
                 <p>Перейти на <a href="/">главную</a> страницу</p>`);

    } else {
        res.writeHead(
            404,
            {'Content-Type': 'text/html; charset=UTF-8'}
        );
        res.end('<h1>Страница не найдена!</h1><p>Перейти на <a href="/">главную</a> страницу</p>');
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});