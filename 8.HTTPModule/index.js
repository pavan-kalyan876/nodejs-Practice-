import http from "http";

// creation of server
const server = http.createServer((req, res) => {
  console.log(req);
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("hello world hello");
});

server.listen(8000, () => console.log("Server Up"));
