require("dotenv").config();
const fs = require("fs");
const path = require("path");

const jsHandler = (request, response) => {
    const filePath = path.join(__dirname, "..", "script.js")

    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(404, { "content-type" : "text/html"});
            response.end("<h1>Not found</h1>");
        } else {
            response.writeHead(200, { "content-type" : "application/javascript"});
            response.end(file);
        }
    })
}

module.exports = jsHandler;
module.exports = jsHandler;