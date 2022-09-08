const express = require("express");
const app = express();

app.get("/about", (req, resp) => {
  resp.send("<h1>Welcome, This is a About Page</h1>");
});
app.get("/", (req, resp) => {
  resp.send(
    `
  <input type="text" placeholder="username" 
  value="${req.query.name}"/>  
<button>click me </button>
  `
  );
});

app.get("/help", (req, resp) => {
  resp.send([
    {
      name: "aniket",
      email: "aniket@test.com",
    },
    {
      name: "aniket",
      email: "aniket@test.com",
    },
  ]);
});
console.log("localhost:5000");

app.listen(5000);
