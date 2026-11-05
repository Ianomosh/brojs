// console.log(`Hello world`);
// console.log(`i like pizza`);

// window.alert(`this is an alert`);
// window.alert(`i like pizza`);
document.getElementById(`myH1`).textContent = `Hello Ian`;
document.getElementById(`myp`).textContent = `i love vienna`;
document.getElementById(`email`).textContent = `iananyona2@gmail.com`;

// variable - a container that stores a value, behaves as if it were the value it contains

// let x = 100;

// console.log(x);

// const age = 25;
// const price = 10.99;
// const GPA = 2.1;
// console.log(
//   `you are ${age}years old, you have a ${GPA}, which is very good, ${price} isth the amound of money you owe me`,
// );

// const firstName = `omosh`;
// const email = `iananyona2@gmail.com`;

// console.log(typeof firstName);
// console.log(`hello, Your name is ${firstName}`);

// console.log(`hello, your email is ${email}`);

// const online = true;
// const forSale = false;

// console.log(`omosh is online: ${online}`);
// console.log(`is this car for sale: ${forSale} `);

// const fullName = `ian omosh`;
// const age = 23;
// const student = false;

// document.getElementById(`p1`).textContent = `Hello my name is ${fullName}`;
// document.getElementById(`p2`).textContent = `And i am ${age}years of age`;
// document.getElementById(`p3`).textContent =
//   `It is ${student} to say that i am a sudent`;

// let students = 30;

// // students = students * 2;
// // students = students / 2;
// // const extraStudent = students % 3;

// students += 1;

// console.log(students);

// Accepting user input
// let userNmae = window.prompt(`whats your username`);

// console.log(userNmae);

let username;

document.getElementById(`mySubmit`).onclick = function () {
  username = document.getElementById(`myText`).value;
  console.log(username);
};
