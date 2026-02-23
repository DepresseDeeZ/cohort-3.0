// promise class
// function setTimeoutPromisified(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function callback() {
//   console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);

// function random() {}
// function callback() {
//   console.log("callbakc");
// }
// let p = new Promise(random);
// p.then(callback);

// const fs = require("fs");
// function readTheFile(callback) {
//   fs.readFile("a.txt", "utf8", function (err, data) {
//     callback(data);
//   });
// }
// function readFile(fileName) {
//   return new Promise(readTheFile);
// }
// const p = readFile();
// function callback(contents) {
//   console.log(contents);
// }
// p.then(callback);

function callAsyncFn(pp) {
  pp("hello how are you");
}
const p = new Promise(callAsyncFn);
function callback(str) {
  console.log(str);
}
p.then(callback);
