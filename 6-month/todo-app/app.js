const form = document.getElementById("form")
const input = document.getElementById("input")
const todoList = document.getElementById("todo-list")
getFromLocalStorage()

form.addEventListener("submit", (e) => {
    e.preventDefault()
    createTodo()
    saveToLocalStorage()
})

function createTodo() {
    const li = document.createElement("li")
    const label = document.createElement("label")
    const checkbox = document.createElement("input")
    const buttonEdit = document.createElement("button")
    const buttonDelete = document.createElement("button")

    checkbox.type = "checkbox"
    buttonEdit.innerHTML = "Edit"
    buttonDelete.innerHTML = "Delete"
    label.innerHTML = input.value

    li.addEventListener("click", () => {
        li.classList.toggle("done")
        saveToLocalStorage()
        if (li.className.includes("done")) {
            checkbox.checked = true
        } else {
            checkbox.checked = false
        }
    })

    buttonDelete.addEventListener("click", () => {
        li.remove()
        saveToLocalStorage()
    })

    li.append(checkbox, label, buttonEdit, buttonDelete)
    todoList.appendChild(li)
    input.value = ""
}

function saveToLocalStorage() {
    localStorage.setItem("todos", todoList.innerHTML)
}

function getFromLocalStorage() {
    const data = localStorage.getItem("todos")
    todoList.innerHTML = data
}