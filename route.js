const fs = require('fs');

function Createfilesystem(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    if (method === "GET") {
      fs.readFile("message.txt", "utf8", (err, data) => {
        if (err) {
          console.error("Error reading file:", err);
          res.statusCode = 500;
          res.end("Error reading file");
          return;
        }
        const messages = data ? data.split("\n") : [];
        
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write("<body>");

        // Form to add new messages
        res.write("<form action='/message' method='POST'>");
        res.write("<input type='text' name='message'>");
        res.write("<button type='submit'>Send</button>");
        res.write("</form>");

        // Display existing messages at the top of the form
        res.write("<ul>");
        messages.reverse().forEach((message) => {
          if (message.trim() !== "") {
            res.write(`<li>${message}</li>`);
          }
        });
        res.write("</ul>");

        res.write("</body></html>");
        res.end();
      });
    }
  } else if (url === "/message" && method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString(); // Accumulate the data
    });
    req.on("end", () => {
      const message = decodeURIComponent(body.split("=")[1]); // Extract the message from the form data
      fs.appendFile("message.txt", message + "\n", (err) => {
        if (err) {
          console.error("Error writing to file:", err);
          res.statusCode = 500;
          res.end("Error saving message");
          return;
        }
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  } else {
    // For other routes
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
  }
}

module.exports = Createfilesystem;
