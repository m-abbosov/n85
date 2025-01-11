// function Car(name, model, year, color) {
//     this.name = name;
//     this.model = model;
//     this.year = year;
//     this.color = color;
// }


// Car.prototype.ride = function () {
//     console.log("Moshinani haydayapman...");
// }

// const bmw = new Car("BMW", "X5", 2018, "blue");

// console.log(bmw);


// class Car {
//     constructor(name, model, year, color) {
//         this.name = name;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }
//     get fullInfo() {
//         return `Bu mashinaning nomi ${this.name}. Modeli: ${this.model}, rangi: ${this.color}.`
//     }

//     set changeName(newName) {
//         this.name = newName
//     }
// }

// const car1 = new Car("BMW", "X5", 2018, "blue")

// console.log(car1.fullInfo);
// car1.changeName = "Mers"
// console.log(car1.fullInfo);



class Ulov {
    #name;

    get getName() {
        return this.#name
    }

    set setName(newName) {
        this.#name = newName
    }
    // walking() {
    //     console.log(`${this.name} harakatlanayapti...`);
    // }
}

// class Car extends Ulov {

//     constructor(name, color, year, model) {
//         super(name)
//         this.color = color;
//         this.year = year;
//         this.model = model;
//     }

//     get fullInfo() {
//         return `Bu mashinaning nomi ${this.name}. Modeli: ${this.model}, rangi: ${this.color}.`
//     }

//     walking() {
//         console.log(`${this.name} yurayapti...`);
//     }
// }

const ulov1 = new Ulov()
ulov1.setName = "Eshshak"
console.log(ulov1.getName);

