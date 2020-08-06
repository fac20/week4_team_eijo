//  const template = require("./blogtemp");
 const posts = [];  

 function submit(request, response) {
    let body = "";
    
    // our handler runs before the entire request has finished
    // so we need to listen for "data" events to get hold of every chunk of our request body
    request.on("data", chunkOfData => {
      // we build up the body string each time we get a new chunk of the data
      body += chunkOfData;
    })
    
    // this event runs our callback once the entire request is finished
    // this means we have the whole body and can send a response
    request.on("end", () => {
      // the body submitted by a form is url-encoded like "?name=oli" so we need to parse this
      const data = new URLSearchParams(body);
      console.log(data)
      const postObject = Object.fromEntries(data);
      posts.unshift(postObject);
      console.log(posts);
      const username = data.get("username");
      const stuff = data.get("blog");
      response.writeHead(200, { "content-type": "text/html" });
      // our template function needs access to the name variable to insert it inside the HTML string
      // const html = templates.submit(name);
      response.end(completeContent(compilePosts()))
    //   response.end(template(username, stuff));//BUT THIS WONT WORK MORE THAN ONCE
    })
    response.on("error", error => {
        console.log(error);
        // 500 status code means "Server error"
        response.writeHead(500, { "content-type": "text/html" });
        // I couldn't be bothered to write a template function for this response, soz
        const html = `<h1>Wow that's really broken huh</h1>`
        response.end(html)
    })
}

function compilePosts() {
    return posts.map( post => {
        return `
    <div class="svg-container">
        <div class="div-balloon">
            <div class="name-container" >${post.username}</div>
            <div class="blog-container">    
                <p id="ballon-p" class="p__balloon">${post.blog}</p>
                <input type="image" src="/Resources/balloon-burst.png" class="img__bin" id="img__bin" />
            </div>
        </div>
    </div> `
    })
    .join("\n")
};


function completeContent(postList) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Feed</title>
            <link rel="stylesheet" href="style.css">
            <script src="script.js" defer></script>
        </head>
        <!--Blog page lalala-->
        <body>
            <section>
                ${postList}
            </section>
        </body>
        </html>
        `
}

module.exports =  submit ;