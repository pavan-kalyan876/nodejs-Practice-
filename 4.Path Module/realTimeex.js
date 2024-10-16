import path from "path";
//const path = require("path");
const filePath = "/users/pavan/uploads/images/profile.png";

// task one get the file name
const fileName = path.basename(filePath);
console.log("File Name:", fileName); // File Name: profile.png

const directoryName = path.dirname(filePath);
console.log("directory Name: ", directoryName); // directory Name:  /users/pavan/uploads/images

const fileExtension = path.extname(fileName);
console.log("file Extension:", fileExtension); //file Extension: .png

