const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "person.json");
const person = JSON.parse(fs.readFileSync(pathToFile));

fs.writeFileSync(pathToFile, personJson);