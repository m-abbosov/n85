// function calc(...arguments) {
//     // console.log(arguments);

//     console.log(arguments);

//     // const sum = arguments.filter((num) => num % 2 === 1).reduce((total, num) => total + num, 0)

// }

// calc(5, 10, 20, 40, 1, 7)



// function createUser(name, age, address, phone) {
//     return {
//         name: name,
//         age: age,
//         address: address,
//         phone: phone
//     }
// }


// const firstUser = createUser("Odil", 20, "Tashkent", "99999999")
// console.log(firstUser);


// function total(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// const sum = total(10)(5)(20)

// console.log(sum);


// const { A: x, B: y } = calc(3, 4)


// function calc(x, y) {
//     return {
//         A: (a) => a * x,
//         B: (b) => b * y
//     }
// }

// console.log(x(2) + y(4)) // 3 * 2 + 4 * 4 = 22






// function calc(a) {
//     return a(20)
// }

// console.log(calc((b) => b * 2));

// setInterval(() => {
//     console.log(20);
// }, 2 * 1000)





// const nums = [5];

// const multiplyBy3 = (nums) => nums.map((n) => n * 5);
// const add10 = (nums) => nums.map((n) => n + 10);
// const sum = (nums) => nums.reduce((acc, n) => acc + n, 0);

// const pipe = (...functions) => (input) =>
//     functions.reduce((acc, fn) => fn(acc), input);

// const processNumber = pipe(multiplyBy3, add10, sum);

// console.log(processNumber(nums));



const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]


// const removedDuplicate = nums.filter((num) => nums.indexOf(num) === nums.lastIndexOf(num))



var removeDuplicates = function (nums) {
    
};



console.log(removeDuplicates);


// console.log(removedDuplicate);
