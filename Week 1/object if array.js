// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male
function returUser(arr) {
  let name = "";
  let leng = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18 && arr[i].gender === "male") {
      if (i === leng) {
        name += arr[i].name;
      } else {
        name += arr[i].name + ", ";
      }
    }
  }
  return name;
}
// initialise a new array, push to a new array
// you can use the filter function inside an array

const users = [
  {
    name: "harkirat",
    age: 21,
    gender: "male",
  },
  {
    name: "priya",
    age: 21,
    gender: "female",
  },
  {
    name: "kash",
    age: 21,
    gender: "male",
  },
];
console.log(returUser(users));
