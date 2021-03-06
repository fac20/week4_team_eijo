const router = require("./router");
const test = require("tape");
const supertest = require("supertest");
const fs = require("fs");
// const http = require("http");
// const server = http.createServer(router);

// Test to ensure tape is working
test("Initialise", t => {  
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

//Test to ensure home page returns OK
test("Home route returns status code 200 OK", t => {
  supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type", "text/html")
    .end((err, res) => {
      t.error(err);
      let result = res.text.includes("<!--Test Number One lalala-->")
      t.equal(result, true)
      t.end();        
    });
});
  
//Test to ensure feed page returns OK
test("Blog/feed route returns status code 200 OK", t => {
  supertest(router)
    .get("/blog")
    .expect(200)
    .expect("content-type", "text/html")
    .end((err, res) => {
      t.error(err);
      let result = res.text.includes("<!--Blog page lalala-->")
      t.equal(result, true)
      t.end();        
  });
});

//Test to ensure page redirects
test("Check any other page redirects to home", t => {
  supertest(router)
    .get("/lsfjvlj")
    .expect(302)
    .expect("location", "/")
    .end((err, res) => {
      t.error(err);
      t.end();        
  });
});

//test to see if asset requests are handled
test("Check to see if asset requests are handled", (t) => {
  supertest(router)
    .get("/Resources/balloon-outline.svg")
    .expect(200)
    .expect("content-type", "image/svg")
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

//test for the css route 
test("CSS is OK response of 200", (t) => {
  supertest(router)
    .get("/style.css") 
    .expect(200)
    .expect("content-type", "text/css")
    .end((err, res) => {
      t.error(err);
      t.end();
    });
})

//test for the script.js request
test("Check any other page redirects to home", t => {
  supertest(router)
    .get("/script.js")
    .expect(200)
    .expect("content-type", "application/javascript")
    .end((err, res) => {
      t.error(err);
      t.end();        
  });
});

//test to see post request is handled
// test("Check to see if post requests are handled", (t) => {
//   supertest(router)
//     .post("/blog.html")
//     .expect(200)
//     .send(["a", "b"])
//     .expect("Content-Type", "text/html")
//     .end((err, res) => {
//       t.error(err);
//       t.deepEqual(res.body, ["a", "b"], "Should return payload")
//       t.end();
//     });
// });