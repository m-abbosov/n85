const odam = {
    firstname: "Jasur",
    lastname: "Bekzodov",
    age: 25,
    university: "WUIT",
    mail: "test@mail.ru",
    isMarried: false,
    address: {
        homeNum: 19,
        region: "Chilonzor",
        state: "UZ",
        postal: {
            num: 9000909,
            key: "uz"
        }
    },
    studyList: ["WUIT", "TUIT", "O'zMU", "GulDU"],
    fullname: function () {
        console.log(this);
    }
}


// console.log(firstname.length, age, lastname);

// document.getElementById('street').innerText = odam.address?.street

// odam["job"] = "Frontend Developer"

// delete odam.address

// console.log(odam);



// function createCar(name, year, colori, model) {
//     return {
//         name,
//         year,
//         colori,
//         model
//     }
// }

// const bmw = createCar("BMW", 2019, "black", 'M5')

// console.log(bmw);




// const a = "10";

// (function a(b) {
//     console.log(b);

// })(10)


// const a = () => {
//     console.log(this);
// }
// a()





// for (let a in odam) {
//     console.log(odam[a]);
// }
// const obj = new Object()

// obj.name = "Aziz"
// obj.lastname = "Jasurov"

// console.log(obj);
// const a = [["name", "Aziz"], ['age', 30], ["address", "Tashkent"]]


odam.firstname = "Aziz"
odam.job = "Developer"

console.log(Object.isSealed(odam));
console.log(odam);



const students = [
    {
        name: "Aziz",
        age: 20
    },
    {
        name: "Jasur",
        age: 15
    }
]

console.log(students[1].name);
