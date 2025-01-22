const tbody = document.querySelector(".table tbody")
const addForm = document.getElementById("add-form")
const studentModal = document.getElementById("studentModal")
const searchInput = document.getElementById("search-input")
const groupSelect = document.getElementById("form-select")
const modalBtn = document.getElementById("modal-btn")
const addBtn = document.getElementById("add-btn")
const modalTitle = document.querySelector(".modal-title")

let search = "";
let group = "All";
let selectedIndex = null
