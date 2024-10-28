// for , while, do while, break, continue, for of, for in

// for (let i = 1; i <= 100; i++) {
//   if (i === 50) {
//     break;
//   }

//   console.log(i);
// }

// let nums = [50, 57, 23, 43, 42, 50, 2, 8];
// let evenNums = 0;

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) {
//     evenNums++;
//   }
// }

// console.log(evenNums);

// let price = 12000;

// for (let i = 0.1; i <= 1; i += 0.1) {
//   console.log(price * i);
// }

// let num = +prompt("Enter number");
// let i = 1;
// let S = 1;

// while (i < 10) {
//   S = S * i;
//   i++;
// }

// console.log(S);

// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     console.log(i, j);
//   }
// }

// let i = 11;
// do {
//   console.log("Hello");
//   i++;
// } while (i < 10);

// let password = "1234";
// let count = 0;

// let enteredPassword;

// do {
//   enteredPassword = prompt("Enter your password");
//   count++;
//   if (enteredPassword === password) {
//     alert(`${enteredPassword} is correct. You have entered ${count} times`);
//   } else {
//     alert("Password is incorrect");
//   }
// } while (password !== enteredPassword);

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log();
