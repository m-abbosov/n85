const students = getFromStorage();

renderStudents()

addForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (selectedIndex === null) {
        students.push({
            firstName: addForm.firstName.value,
            lastName: addForm.lastName.value,
            class: addForm.studentClass.value,
            hasWork: addForm.hasWork.checked
        })
        Toastify({
            text: "Qo'shildi!",
            duration: 3000,
            close: true,
            style: {
                background: "linear-gradient(to right,rgb(98, 255, 0), #96c93d)",
            }
        }).showToast();
    } else {
        students[selectedIndex].firstName = addForm.firstName.value
        students[selectedIndex].lastName = addForm.lastName.value
        students[selectedIndex].class = addForm.studentClass.value
        students[selectedIndex].hasWork = addForm.hasWork.checked
        Toastify({
            text: "O'zgartirildi!",
            duration: 3000,
            close: true,
            style: {
                background: "linear-gradient(to right,rgb(238, 255, 0),rgb(255, 255, 0))",
                color: "black"
            }
        }).showToast();
    }


    addForm.reset()
    bootstrap.Modal.getInstance(studentModal).hide();
    renderStudents()
    saveToStorage()
})

searchInput.addEventListener("input", (e) => {
    search = e.target.value
    renderStudents()
})

groupSelect.addEventListener("change", (e) => {
    group = e.target.value
    renderStudents()
})

addBtn.addEventListener("click", () => {
    modalBtn.innerHTML = "Qo'shish"
    modalTitle.innerHTML = "O'quvchi qo'shish"
})


function renderStudents() {
    tbody.innerHTML = ""
    let filteredData = students

    filteredData = students.filter((student) => {
        if (student.firstName.toLowerCase().includes(search.toLowerCase()) || student.lastName.toLowerCase().includes(search.toLowerCase())) {
            return true
        }
    })

    if (group !== "All") {
        filteredData = students.filter((student) => student.class === group)
    }

    filteredData.map((student, i) => {
        const tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${student.firstName}</td>
            <td>${student.lastName}</td>
            <td>${student.class}</td>
            <td>${student.hasWork ? "Ha" : "Yo'q"}</td>
            <td>
                <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#studentModal" onclick="editStudent(${i})">
                    <i class="fa-solid fa-pen"></i>
                </button>
                <button class="btn btn-danger" onclick="deleteStudent(${i})">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        `
        tbody.append(tr)
    })
}

function deleteStudent(index) {
    const isConfirm = confirm("O'chirishni tasdiqlaysizmi?")
    if (isConfirm) {
        students.splice(index, 1)
        Toastify({
            text: "O'chirildi!",
            duration: 3000,
            close: true,
            style: {
                background: "linear-gradient(to right,rgb(255, 38, 0),rgb(201, 61, 61))",
            }
        }).showToast();
        saveToStorage()
        renderStudents()
    }
}

function editStudent(index) {
    selectedIndex = index
    modalBtn.innerHTML = "O'zgartirish"
    modalTitle.innerHTML = "Studentni o'zgartirish"

    addForm.firstName.value = students[index].firstName
    addForm.lastName.value = students[index].lastName
    addForm.studentClass.value = students[index].class
    addForm.hasWork.checked = students[index].hasWork
}

function saveToStorage() {
    localStorage.setItem("students", JSON.stringify(students))
}

function getFromStorage() {
    const storedData = localStorage.getItem("students") || "[]"
    return JSON.parse(storedData)
}