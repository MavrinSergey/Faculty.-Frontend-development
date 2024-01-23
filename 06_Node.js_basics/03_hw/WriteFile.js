const fs = require("fs");
const path = require("path");

const personJson = JSON.stringify(person, null, 2);
const pathToFile = path.join(__dirname, "person.json");

fs.writeFileSync(pathToFile, personJson);