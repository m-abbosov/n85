// const person = {
//     firstName: "Aziz",
//     lastName: "Shukurov",
//     age: 20,
//     getName() {
//         console.log(this.firstName, this.lastName);
//     },
//     changeAge(age) {
//         this.age = age
//     },
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     set changeName(name) {
//         this.firstName = name
//     }
// }

// console.log(person.fullName);




// const person = {
//     adress: {
//         num: 20,
//         street: "Muqimiy",
//         region: "Chilonzor",
//         destrict: "Chilonzor",
//         zipcode: 120001
//     },
//     phone: "+998900999999",
//     mail: "test@mail.ru",
//     get getFullInfo() {
//         console.log(this.adress.destrict, this.adress.street, this.phone, this.mail);
//     },
//     set changeRegion(region) {
//         this.adress.region = region
//     }
// }

// person.changeRegion = "Yunusobod"

// console.log(person);

// const months = ["Yanvar", "Fev", "Mart", "Aprel", "May", "Iyun", "Iyul", "avgust", "sen", "okt", "noyabr", "dekabr"]

// const monthsObj = {
//     0: "Yanvar",
//     11: "Dekabr"
// }



// const now = new Date()


// console.log(now.getDate(), monthsObj[now.getMonth()]);







// const obj2 = { ...obj }

// const obj3 = Object.assign({}, obj)

// obj3.adrees.test.test1 = "Qobil"

// console.log("1", obj);
// console.log("2", obj3);

// const strObj = JSON.stringify(obj)

// console.log(JSON.parse(strObj));


// function deepCopy(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }

//     let copy = {};

//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             copy[key] = deepCopy(obj[key]);
//         }
//     }
//     return copy;
// }

// let deepCopyObj = deepCopy(obj);


// deepCopyObj.address.test.test1 = "test"

function Person(name, age, street) {
    this.ism = name;
    this.yosh = age
    this.address = {
        street
    };
}

// const odam = new Person("Aziz", 20, "Muqimiy")

// console.log(odam);


// const obj = {
//     name: "Aziz",
//     age: undefined,
//     getFullname() {
//         console.log(this.name);
//     },
//     address: {
//         street: "Muqimiy",
//         test: {
//             test1: "11212",
//             test2: 19
//         }
//     }
// }


// const odam = new Person("Javohir", 20, "assa")
// const odam2 = new Person("Javohir2", 20, "assa")

// Person.prototype.greet = function () {
//     console.log(this.ism, "Hello");
// }


// obj.__proto__.sayHello = function () {
//     console.log(this.name, "Hello");
// }

// console.log(obj);

// console.log(odam);
// console.log(odam2);


const odam = {
    age: 20
}

const rabbit = {
    name: "Aziz",
    __proto__: odam
}

// odam.__proto__.hello = function () {
//     console.log("Hello");
// }


Array.prototype.customFilter = function (callback) {
    const arr = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        if (callback(element, index)) {
            arr.push(element)
        }
    }
    return arr
}

const arr = [5, 3, 6, 2, 7, -4, 8, 10];


console.log(arr.customFilter(el => el % 2 === 0));


// 1. Arrayga yana custom metod qo'shing. Vazifasi Array.slice bilan bir xil bo'lsin. 
// Custom yozilishi shart

// 2. Arrayni ichidagi juft sonlarni qaytaradigan metod qo'shing

// 3. Objectni to'liq ismi va u haqida bor ma'lumotlarni chiqaradigan getter yarating, 
// objectdagi 3 ta asosiy ma'lumotlarni o'zgartiradigan setter yarating

// 4. Topishmoqlar dasturini tuzing. Foydalanuvchiga 5 topishmoq bering. 
// Barchasiga javob bersa - unga baxo 5 berasiz. 4 javob bersa - baxo 4.
