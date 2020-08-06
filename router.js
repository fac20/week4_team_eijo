const homeHandler = require("./handlers/home")

function router(request, response) {
    const url = request.url;
    if (url === "/") {
        homeHandler(request, response);
    } else if (url === "/blog")) {
        
    } else if () {
        //css + js files + pictures
    } else {
        //for other urls, 404 OR redirect? use missingHandler
    }
}

module.exports = router;