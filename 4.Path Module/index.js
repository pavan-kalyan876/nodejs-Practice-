import path from "path";

//basename is a method provided by the path module, which is used to retrieve the last part of a file path
console.log(path.basename("c:\\nodejs\\filename.js")); //filename
console.log(path.basename("c:\\nodejs\\app.html.js")); //app.html.js
console.log(path.basename("c:\\nodejs\\app.html.js", ".js")); 
