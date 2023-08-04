const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header with the content type
  res.setHeader('Content-Type', 'text/plain');

  // We write "Hello world" to the response
  res.end('Hello world\n');
});

// We now set the port for the server to listen on
const port = 8000;

// We now tart the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
