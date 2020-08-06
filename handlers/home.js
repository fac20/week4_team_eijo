const fs = require("fs");
const path = require("path");

const homeHandler = (request, response) => {
    const filePath = path.join(__dirname, "..", "index.html")

    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(404, { "content-type" : "text/html"});
            response.end("<h1>Not found</h1>");
        } else {
            response.writeHead(200, { "content-type" : "text/html"});
            response.end(file);
        }
    })
}

module.exports = homeHandler;