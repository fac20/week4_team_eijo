require("dotenv").config();
const port = process.env.PORT || 4000;
const hostname = process.env.HOSTNAME || "localhost";
const http = require("http");
const router = require("./router");

const server = http.createServer(router);

server.listen(port, hostname, () => console.log(`Listening at http://${hostname}:${port}`));