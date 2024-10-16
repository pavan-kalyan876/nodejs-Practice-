import * as fs from "fs/promises";

//creating a directory

try {
  await fs.mkdir("C:\\node js\\courses"); // it wil create folder in my laptop
  console.log("Folder Created ...");
} catch (error) {
  console.log(error);
}
