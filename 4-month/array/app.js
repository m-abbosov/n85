// Array

// const fanlar = ["matem", "matem", 'ona tili', 'rus tili', 'ingliz tili', "jt", 10, 40, null, undefined, true]
// const arr = []

// arr[0] = "Karim"
// arr[2] = "Jasur"
// arr[10] = "Aziz"


// const arr = Array("Hello", "World", "Salom", "Hi")

// console.log(typeof null);




// const fanlar = ["matem", 'ona tili', 'rus tili']
// const fanlarCopy = [...fanlar]
// const fanlar2 = ['ingliz tili', "jt"]

// console.log(fanlarCopy);



// const fanlar = ["matem", "matem", 'ona tili', 'rus tili', 'ingliz tili', "jt", 10, 40, null, undefined, true]

// const sonlar` = [25, 10, 23, 90, 10]
// let s = 0

// for (let i = 0; i < sonlar.length; i++) {
//     const el = sonlar[i];

//     if (el % 2 === 1) {
//         s++
//     }
// }

// console.log(s);`


// for (let el in sonlar) {
//     console.log(Number(el));
// }



// arr[arr.length] = "uzum"
// console.log('oldin', arr);
// arr.push("uzum", 'nok')
// arr.unshift("uzum")

// const deletedEl = arr.shift()


// console.log("keyin", arr);


// const deletedEl = arr.pop()
// console.log(deletedEl);

// const arr1 = ['olma', "anor"]
// const arr2 = ['uzum', "nok"]

// const newArr = arr2.concat(arr1, arr1).concat()

// console.log(newArr);

// let fruits = ["apple", "banana", "orange", "kiwi"];
// let slicedFruits = fruits.slice(0, 2);
// console.log(slicedFruits);
// console.log(fruits);


// let fruits = ["apple", "banana", "orange"];
// fruits.splice(2, 0, "aaaaa");
// console.log(fruits)

// const findedIndex = fruits.indexOf("banana")

// console.log(fruits.includes('a'));

// let a = +String(123).split("").reverse().join("")

// console.log(a);

// console.log(fruits.join(""));


// const arr = fruits.map(fruit => fruit)

// console.log(arr);

// let numbers = [1, 2, 3, 4];
// let evenNumbers = numbers.filter((num) => num % 3 === 0);
// console.log(evenNumbers);

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((total, son) => total * son, 1);


// console.log(sum);

// let fruits = ["apple", "banana", "orange"];
// const newArr = fruits.forEach(fruit => fruit + "a"
// );

// console.log(fruits);

// apple
// banana
// orange

// let numbers = [1, 2, 3, 4];
// let firstEven = numbers.find(num => num === 9);
// console.log(firstEven); // 2

// let fruits = [10, 3, 12, 0, -20];
// fruits.sort((a, b) => b - a);
// console.log(fruits); // ["apple", "banana", "orange"]

// let numbers = [7, 7, 7, 7];
// let allEven = numbers.every(num => num - 7 === 0);
// console.log(allEven);

// let numbers = [1, 2, 3, 4];
// let someEven = numbers.some(num => num - 2 === 0);
// console.log(someEven); 

let numbers = [1, 11, 3, 4];
// let firstEvenIndex = numbers.findIndex(num => num === 11);
// console.log(firstEvenIndex);

// let max = numbers[0]

// numbers.forEach((el) => {
//     if (el >= max) {
//         max = el
//     }
// })

// console.log(max);

numbers.sort((a, b) => a - b)
console.log(numbers[0] - numbers[numbers.length - 1]);

