// Requiring in all the packages that I need to use
const request = require('request');
const fs = require('fs')
// Getting the two arguments that I need from the command line
const url = process.argv.slice(2,3)
const localFilePath = process.argv.slice(3,4)
// Since its an array, turning them into strings
let newUrl = url.toString();
let newFilePath = localFilePath.toString();

// Using the request package to gett info from the newUrl I got from the command line
request(newUrl, (error, response, body) => {
  // I used the file path from the command line then used the body from the request to write using fs
  fs.writeFile(newFilePath, body, err => {
    // if err, handdle it
    if (err) {
      console.log(err)
      return
    }
    // fs.statSynce gives me the size of the file that I downloaded
    const {size} = fs.statSync(newFilePath)
    console.log(`Downloaded and saved ${size} bytes to ${newFilePath}`);
  })
});


