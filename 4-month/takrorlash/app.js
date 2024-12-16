let fruits = ["apple", "banana", 'kiwi', 'orange', "mandarin", "grate", "pinapple"];


// const deletedFruit = fruits.pop();
// console.log(deletedFruit);

// const deletedFruit = fruits.shift()

// console.log(deletedFruit);

// console.log([...fruits, ...fruits2]);


// console.log(b);

// const slicedArr = fruits.slice(1, 4)
// const splicedArr = fruits.splice(1, 3)


// console.log(splicedArr, fruits);

// console.log(fruits.includes('apple'));
// console.log(fruits.reverse());
// console.log(fruits.join("-_-"));

// console.log(fruits.);

// const newArr = fruits.forEach((item) => {
//     console.log(item + "s");

//     return item + "s"
// })


// const filteredArr = fruits.filter((item) => item.length > 6)
// console.log(filteredArr);

// let numbers = [1, 2, 3, 4];

// const sum = numbers.reduce((total, current) => {
//     console.log(total);
//     return total + current

// }, 0)

// console.log(sum);


// let numbers = [20, 10, 90, 49, 29, 10, 14];
// let firstEven = numbers.find(num => num % 2 === 0);
// console.log(firstEven); // 2

// numbers.sort((a, b) => b - a)

// console.log(numbers);


// const everyIsEven = numbers.some((num) => num % 2 === 0)

// console.log(everyIsEven);

// let numbers = [1, 2, 3, 4];
// let firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
// console.log(firstEvenIndex); // 1


// function unique(arr) {
//     return arr.filter(item => {
//         console.log(arr.indexOf(item), arr.lastIndexOf(item));

//         return arr.indexOf(item) == arr.lastIndexOf(item)
//     })
// }

// const son = unique()

// const arr = [2, 2, -7, 2, 8, 9, 8, 8, -9, 5, -3, 5, 3]

// console.log(unique(arr));


// const newArr = new Set(arr)

// console.log([...newArr]);


// function test(arr, n) {
//     let s = 0
//     arr.forEach(element => {
//         if (element % n === 0) s++;
//     });

//     return s
// }

// console.log(test(arr, 4));


function test(arr) {
    arr.sort((a, b) => a - b).pop();
    return arr
}

console.log(test(arr));
