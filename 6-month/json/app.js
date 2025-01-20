const personJSON = sessionStorage.getItem("person")
const deleteBtn = document.getElementById("del")


const person = {
    name: "Jasur",
    age: 20
}


// sessionStorage.setItem("person", JSON.stringify(person))

deleteBtn.addEventListener("click", () => {
    sessionStorage.removeItem("person")
})

// console.log(JSON.parse([personJSON]));


