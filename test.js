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
      let result = res.text.includes("<!--Test Number One lalala-->")
      t.equal(result, true)
      t.end();        
  });
});

//test to see if asset requests are handled
test("Check to see if asset requests are handled", (t) => {
  supertest(router)
    .get("/Resources/")
    .expect(200)
    .expect("content-type", "text/html")
    .end((err, res) => {
      t.error(err);
      let result = res.text.includes("<!--Blog page lalala-->");
      t.equal(result, true);
      t.end();
    });
});