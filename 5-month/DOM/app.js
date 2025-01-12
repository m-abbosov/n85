// const text = document.getElementById("second")
// const input = document.getElementById("input")
const list = document.getElementById("list")

// text.innerHTML = "8888"
// text.style.color = "red"
// text.style.backgroundColor = "rgba(0,0,0, 0.6)"

// text.classList.add("newClass")
// text.classList.remove("text")



// console.log(input.hasAttribute("type"));

// const li1 = document.createElement("li")
// li1.innerHTML = "piyoz";
// const li2 = document.createElement("li")
// li2.innerHTML = "sholg'om";

// list.append(li1, li2)

// list.removeChild(li2)




const users = getUsers()

users.map((user) => {
    const li = document.createElement("li");
    // const addressDiv = document.createElement("div")
    const name = document.createElement("b");
    const phone = document.createElement("p");
    const email = document.createElement("p");
    // const city = document.createElement("p")
    // const street = document.createElement("p")
    // const suite = document.createElement("p")

    // addressDiv.classList.add("address")

    name.innerHTML = user.title;
    phone.innerHTML = user.body;
    email.innerHTML = user.id;

    // city.innerHTML = "City: " + user.address.city;
    // street.innerHTML = "Street: " + user.address.street;
    // suite.innerHTML = "Suite: " + user.address.suite;

    // addressDiv.append(city, street, suite);
    li.append(email, name, phone);
    list.appendChild(li);
})


// const user = {
//     name: "Ali"
// }

// function test(name, age) {
//     console.log(`Salom, ${this.name}. Mening ismim ${name}. Mening yoshim ${age} da.`);
// }

// test.bind(user, "Vali", 20)()



// const globalVar = 10;


function test() {
    const funcVar = 20;


    if (true) {
        const ichkiVar = 30;

        console.log(globalVar);
        console.log(funcVar);
        console.log(ichkiVar);
    }
}

test()