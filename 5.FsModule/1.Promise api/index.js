import * as fs from "fs/promises";

//creating a directory
// try {
//   await fs.mkdir("C:\\node js\\courses\\pavan", { recursive: true }); // it wil create folder in my laptop
//   console.log("Folder Created ...");
// } catch (error) {
//   console.log(error);
// }

// reading a directory or content

// try {
//   const files = await fs.readdir("c:\\sampleNode");

//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log("Error:", error);
// }

// remove folder or directory

// try {
//   await fs.rmdir("c:\\samplenode\\course");
//   console.log("inside folder is deleted");
// } catch (error) {
//   console.log(error);
// }

// create and write files
// readme.md file name
// Hello Nodejs content inside readme.md
try {
  await fs.writeFile("Readme.md", "Hello NodeJS");
  console.log("file created inside the currect project");
} catch (error) {
  console.log(error);
}
