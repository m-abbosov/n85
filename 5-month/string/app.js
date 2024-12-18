// let str = "Sardor Rashidov";
// let isMarried = true;
// let birthYear = 1998;

// let res = `${isMarried ? "2 boshli" : "Bo'ydoq"} ${fullName} hozir ${2024 - birthYear} yoshda.`

// console.log(res);

// console.log(fullName[fullName.length - 1]);

// console.log("Sar" > "Dav")

// console.log('a' > 'a'); // true

// console.log("Z".codePointAt()); // 90
// console.log("z".codePointAt()); // 122

// console.log('z' > "Z");

// console.log(String.fromCharCode(90));



// console.log(String.fromCharCode(109)) // m



// for (let i = 0; i < fullName.length; i++) {
//     console.log(fullName[i]);
// }

// for (i in str) {
//     console.log(i)
// }

// for (el of str) {
//     console.log(el)
// }

// let str = "Sardor Rashidov";
// console.log(str.charCodeAt(10), str[10]);

// const str = "Learn JavaScript";
// console.log(str.includes("ava")); // true
// console.log(str.includes("Python")); // false

// const str = "backend.js";
// console.log(str.startsWith("back")); 

// const str = "JavaScript is awesome!";
// console.log(str.indexOf("is"));
// const str = "JavaScript, is, JavaScript!ljj

// console.log(str.lastIndexOf("Java"));


// console.log(str.slice(10, 4));
// console.log(str.substring(10, 4));

// console.log(str.trim());


// console.log(str.repeat(3));

// const str = "I love JavaScript and JavaScript loves me.";

// const emailRegex = /^(\w+)@(\w+)\.([a-z]{2,8})([\.a-z]{2,8})?$/;

// const str2 = "+998"
// console.log(str.split(", ")); 

let str = "salom dunyo is aajkabdkjab";
const strArr = str.split(" ");

for (let index = 0; index < strArr.length; index++) {
    console.log(strArr[index].length);
}


const { A: x, B: y } = calc(3, 4);
console.log(x(2) + y(4)); // 6 + 16 = 22

function calc(a, b) {
    return {
        A: (x) => x * a,
        B: (y) => y * b
    };
}