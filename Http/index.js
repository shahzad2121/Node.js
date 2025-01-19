// Import the built-in 'http' module to create a web server in Node.js
const http = require("http");

// Define the port number where the server will listen for requests
const PORT = 3000;

// Create a server using the 'createServer' method of the 'http' module
// This method accepts two parameters: 'req' (request) and 'res' (response)
//   // End the response and send back a JSON object

const server = http.createServer()

// (req, res) => {
//   // Set the response header using 'writeHead'
//   // '200' is the HTTP status code for "OK"
//   // 'Content-type' is set to 'application/json' indicating the response is JSON
//   // This method must be called before 'res.end'
//   res.writeHead(200, { "Content-type": "application/json" });

//   // End the response and send back a JSON object
//   // We use 'JSON.stringify' to convert the JavaScript object to a JSON string
//   res.end(
//     JSON.stringify({
//       id: 1,
//       name: "Shahzad", // Name field with a string value
//       SON: "Sanaullah", // Parent field (SON) with a string value
//     })
//   );
// };

// Listen for the 'request' event on the server
server.on("request", (req, res) => {

    // If the request URL is '/products', send a JSON response
    if (req.url === "/products") {
      res.statusCode = 200; // Set HTTP status to 200 (OK)
      res.setHeader("Content-Type", "application/json"); // Set response type to JSON
      res.end(
        JSON.stringify({ // Send JSON response with product data
          id: 1,
          product: "T-shirt",
          Price: 3000,
        })
      );
  
    // If the request URL is '/category', send an HTML response
    } else if (req.url === '/category') {
      res.statusCode = 200; // Set HTTP status to 200 (OK)
      res.setHeader('Content-Type', 'text/html'); // Set response type to HTML
      res.write('<html><body><ul>'); // Begin writing HTML content
      res.write('<li>T-Shirts</li><li>Dress-Shirts</li>'); // List categories
      res.write('<li>Jeans</li><li>Cotton-jeans</li>');
      res.write('</ul></body></html>'); // Close HTML content
      res.end(); // End the response
  
    // For all other URLs, send a 400 (Bad Request) status
    } else {
      res.statusCode = 400; // Set status to 400 (Bad Request)
      res.end(); // End the response
    }
  });
  

// Make the server listen on the specified 'PORT' (3000 in this case)
// When the server starts, log a message to the console
server.listen(PORT, () => {
  console.log(`server is listening at port ${PORT}`); // Logs this message when the server is up and running
});
