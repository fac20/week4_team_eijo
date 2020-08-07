const submit = require("./submit")

function compilePosts() {
    return submit.posts.map( post => {
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

module.exports = { completeContent, compilePosts }
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

module.exports = { completeContent, compilePosts }
