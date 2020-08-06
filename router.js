const homeHandler = require("./handlers/home")
const blogHandler = require("./handlers/blog")

function router(request, response) {
    const url = request.url;
    if (url === "/") {
        homeHandler(request, response);
    } else if (url === "/blog") {
        blogHandler(request,response);
    // } else if () {
        //css + js files + pictures
    } else {
        response.writeHead( 302, { location: "/"})
        response.end();
    }
}

module.exports = router;