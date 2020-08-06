const homeHandler = require("./handlers/home")
const blogHandler = require("./handlers/blog")
const cssHandler = require("./handlers/css")
const jsHandler = require("./handlers/javascript.js")

function router(request, response) {
    const url = request.url;
    if (url === "/") {
        homeHandler(request, response);
    } else if (url === "/blog") {
        blogHandler(request,response);
    } else if (url.includes("css")) {
        cssHandler(request,response);
    } else if (url.includes("js")) {
        jsHandler(request,response);    
        //files + pictures
    //else POST - add to array
    // on herokapp.com/ fetch("/hello") is equivalent to herokuapp.com/hello
    } else {
        response.writeHead( 302, { location: "/"})
        response.end();
    }
}

module.exports = router;