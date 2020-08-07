const fs = require("fs");
const path = require("path");

const types = {
  jpg: "image/jpg",
  png: "image/png",
  svg: "image/svg+xml",
  ico: "image/x-icon",
};

const assetsHandler = (request, response) => {
    const url = request.url;
    const urlArray = url.split(".");
    const extension = urlArray[1];
    const type = types[extension];

    const filePath = path.join(__dirname, "..", url)

    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(404, { "content-type" : "text/html"});
            response.end("<h1>Not found</h1>");
        } else {
            response.writeHead(200, { "content-type" : type });
            response.end(file);
        }
    })
}

module.exports = assetsHandler;