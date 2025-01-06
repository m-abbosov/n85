// function factorial(n) {

//     if (n === 0) {
//         return 1
//     }

//     return n * factorial(n - 1)
// }

// function fibonacci(n) {
//     if (n === 0 || n === 1) {
//         return n
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(7));


// Pure function
// function calc(a, b) {
//     return a + b
// }

// console.log(calc(20, 20));

// Inpure Functions
// let a = 10

// function calc(b) {
//     return a + b
// }

// console.log(calc(20));


// function count() {
//     let a = 0;

//     return function () {
//         return a++
//     }
// }

// const counter = count()

// console.log(counter()); // 1
// console.log(counter());// 2
// console.log(counter()); // 3
// console.log(counter()); // 4


// function tashqiFunksiya(tashqiQiymat) {
//     return function ichikiFunksiya(ichikiQiymat) {
//         console.log(tashqiQiymat);
//         console.log(ichikiQiymat);
//     }
// }
// tashqiFunksiya("Bu tashqi qiymat")("Bu ichki qiymat")



// function listener(element, callback) {
//     let a = 10;
//     return element.addEventListener("click", () => {
//         callback()
//         console.log(a);
//         return a++
//     })
// }

// listener(document.getElementById('btn'),
//     () => {
//         console.log('hello');

//     })
// listener(document.getElementById("edit"), "Edit Btn Clicked!")



function test() {
    let a = 0
    return function () {
        a++
        return a
    }
}

const counter = test()

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
