const fs = require("fs");
const path = require("path");
const express = require("express");
const handlebars = require("handlebars");
const app = express();

let uniqueID = 0;
const articles = [];
app.use(express.json());

app.get('/articles', (req, res) => {
    res.send({articles});
});
app.get('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        res.send({article});
    } else {
        res.status(404);
        res.send({article: null});
    }
});
app.put('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;

        res.send({article});
    } else {
        res.status(404);
        res.send({article: null});
    }
});
app.delete('/articles/:id', (req, res) => {
    const article = articles.find((article) => article.id === Number(req.params.id));

    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);

        res.send({article});
    } else {
        res.status(404);
        res.send({article: null});
    }
});
app.post('/articles', (req, res) => {
    uniqueID += 1;

    articles.push({
        id: uniqueID,
        ...req.body
    });

    res.send({
        id: uniqueID,
    });
});
app.listen(3000);


// app.get('/', (req, res) => {
//     const pathToTemplate = path.join(__dirname, '/templates/home.handlebars');
//
//     fs.readFile(pathToTemplate, 'utf-8', (err, data) => {
//         if (err) {
//             res.status(500);
//             res.send(err.message);
//         } else {
//             const template = handlebars.compile(data);
//             res.send(template({ articles }));
//         }
//     });
// });