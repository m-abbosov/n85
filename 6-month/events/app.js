// const minus = document.getElementById("minus")
// const add = document.getElementById("add")
// const reset = document.getElementById("reset")
// const counter = document.getElementById("counter")
// let S = 0

const backTop = document.getElementById("back-top")

// add.addEventListener("click", () => {
//     if (S !== 0 && S % 11 === 0) {
//         alert("11 ga bo'linadigan son")
//     }
//     S++;
//     counter.innerText = S;
// })


// minus.addEventListener("click", () => {
//     if (S === 0) return;
//     S--;
//     counter.innerText = S;
// })

// reset.addEventListener("click", () => {
//     S = 0;
//     counter.innerText = S;
// })

// btn.addEventListener("mouseup", () => {
//     console.log("UP");
// })

// btn.addEventListener("mousedown", () => {
//     console.log("DOWN");
// })

// btn.addEventListener("mouseenter", () => {
//     btn.innerText = "Enter"
// })

// btn.addEventListener("mouseleave", () => {
//     btn.innerText = "Click"
// })


// window.addEventListener("load", () => {
//     console.log(1);
// })


// (function () {
//     console.log(2);
// })()


// window.addEventListener("keydown", (e) => {
//     console.log(e);
// })
// window.addEventListener("keyup", (e) => { })
// window.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         console.log("Enter bosildi");

//     }
// })

window.addEventListener("scroll", (e) => {
    // console.log(window.scrollX);
    // console.log(window.scrollY);

    if (window.scrollY > 200) {
        console.log("200 dan o'tdi");
        backTop.classList.add("show")
    } else {
        backTop.classList.remove("show")
    }
})

backTop.addEventListener("click", () => {
    window.scrollTo(0, 0)
})