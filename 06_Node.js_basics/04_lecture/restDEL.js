const express = require("express");
const app = express();

app.use(express.json());
app.delete('/', (req, res) => {
    console.log(req.body)
    res.send("<h1>This is a delete request!</h1>");
});

app.listen(3000);