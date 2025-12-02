/*
Assignment #1
Write a function that takes a user as an input and greets them with their name and age
Assignment #2
Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
Assignment #3
Also tell the user if they are legal to vote or not
*/
// Assignment #1
let user = {
  name: "umang",
  age: 23,
};
function greet(user) {
  console.log(`hello how are you ${user.name} and you are ${user.age}`);
}
// greet(user);

// Assignment #2
let user2 = {
  name: "umang",
  age: 23,
  gender: "male",
};
function greet2(user) {
  console.log(
    `hello how are you ${user.name} and you are ${user.age} amd you gender is ${user.gender}`
  );
}
// greet2(user2);

// Assignment #3
function greet3(user) {
  let isLegal = "";
  if (user.age < 18) {
    isLegal = "Not legal";
  } else {
    isLegal = "Legal";
  }
  console.log(
    `hello how are you ${user.name} and you are ${user.age} amd you gender is ${user.gender} and the user is ${isLegal}`
  );
}
// greet3(user2);
