// --- Number Buttons (0-9) ---
const zeroEl = document.getElementById("zero");
const oneEl = document.getElementById("one");
const twoEl = document.getElementById("two");
const threeEl = document.getElementById("three");
const fourEl = document.getElementById("four");
const fiveEl = document.getElementById("five");
const sixEl = document.getElementById("six");
const sevenEl = document.getElementById("seven");
const eightEl = document.getElementById("eight");
const nineEl = document.getElementById("nine");

// --- Operator Buttons ---
const plusEl = document.getElementById("plus");
const minusEl = document.getElementById("minus");
const multiplyEl = document.getElementById("multi"); // For 'x' or '*'
const divideEl = document.getElementById("div"); // For '/'
const equalsEl = document.getElementById("equal"); // For '='
const clearEl = document.getElementById("clear"); // For the 'C' button

// --- Display Input ---

let x = "";
let y = "";
let op = "";
let value = [];
// This is still best selected by class/tag:
const displayInput = document.querySelector(".panel input");
// number button
zeroEl.addEventListener("click", function () {
  value.push(0);
});
oneEl.addEventListener("click", function () {
  value.push(1);
});
twoEl.addEventListener("click", function () {
  value.push(2);
});
threeEl.addEventListener("click", function () {
  value.push(3);
});
fourEl.addEventListener("click", function () {
  value.push(4);
});
fiveEl.addEventListener("click", function () {
  value.push(5);
});
sixEl.addEventListener("click", function () {
  value.push(6);
});
sevenEl.addEventListener("click", function () {
  value.push(7);
});
eightEl.addEventListener("click", function () {
  value.push(8);
});
nineEl.addEventListener("click", function () {
  value.push(9);
});

// operator button
plusEl.addEventListener("click", function () {
  value.push("+");
});
minusEl.addEventListener("click", function () {
  value.push("-");
});
multiplyEl.addEventListener("click", function () {
  value.push("*");
});
divideEl.addEventListener("click", function () {
  value.push("/");
});
equalsEl.addEventListener("click", function ob(x, y) {
  //   displayInput.value = `${x} ${ob} ${y}`;
  console.log(value);
});
function add(x, y) {
  return x + y;
}
function multi(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}
function sub(x, y) {
  return x - y;
}
