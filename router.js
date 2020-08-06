const homeHandler = require("./handlers/home")
const blogHandler = require("./handlers/blog")
const cssHandler = require("./handlers/css")
const jsHandler = require("./handlers/javascript.js")
const assetsHandler = require("./handlers/assets")

function router(request, response) {
    const url = request.url;
    if (url === "/") {
        homeHandler(request, response);
    } else if (request.method === "POST") {
        //- add to array
    } else if (url === "/blog") {
        blogHandler(request,response);
    } else if (url.includes("css")) {
        cssHandler(request,response);
    } else if (url.includes("js")) {
        jsHandler(request,response);    
    } else if (url.includes("/Resources")) {
        assetsHandler(request,response);
    } else {
        response.writeHead( 302, { location: "/"})
        response.end();
    }
}

module.exports = router;

// on herokapp.com/ fetch("/hello") is equivalent to herokuapp.com/hello