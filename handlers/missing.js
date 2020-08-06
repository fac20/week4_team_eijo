const fs = require("fs");
const path = require("path");

const missingHandler = (request, response) => {
    response.writeHead( 302, { location: "/"})
    response.end();
}