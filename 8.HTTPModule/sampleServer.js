import http from "http";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h2>Welcome to home Page</h2>");
  } else if (req.url == "/about") {
    res.end("<h2>Welcome to about page</h2>");
  } else if (req.url == "/contact") {
    res.end("<h3>Welcome to contact page</h3>");
  } else {
    res.end("<h4>You landed on some where</h4>");
  }
});
server.listen(8000, () => console.log("server up"));
