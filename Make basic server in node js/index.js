const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("<h1>Aniket wankar first Node server</h1>");
    resp.end();
  })
  .listen(4500);
