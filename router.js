function router(request, response) {
    const url = request.url;
    if (url === "/") {
        homeHandler(request, response);
    } else if (url.includes("blog")) {
        
    }
}