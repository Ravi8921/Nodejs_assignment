const http = require("http");
const routes = require("./route.js");

const server = http.createServer((req, res) => {
  routes(req, res); // Handle routes using the exported function from route.js
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
