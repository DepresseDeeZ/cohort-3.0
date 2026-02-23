const fs = require("fs");

const content = fs.readFileSync("./a.txt", "utf8");
const content2 = fs.readFileSync("./b.txt", "utf8");
console.log(content + " , " + content2);
