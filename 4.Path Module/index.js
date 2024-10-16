import path from "path";

//basename is a method provided by the path module, which is used to retrieve the last part of a file path
console.log(path.basename("c:\\nodejs\\filename.js")); //filename.js
console.log(path.basename("c:\\nodejs\\app.html.js")); //app.html.js
console.log(path.basename("c:\\nodejs\\app.html.js", ".js"));

// dirname :It returns the path of the folder containing the file or directory specified.
const filePath = "/users/pavan/documents/file.txt";
const dirname = path.dirname(filePath);
console.log(dirname); // Output: /users/pavan/documents

// extname is useful when you want to extract or verify the file type based on the extension.
const ext = "/users/pavan/documents/file.js";
const extnam = path.extname(ext);
console.log(extnam); // output will be .js
