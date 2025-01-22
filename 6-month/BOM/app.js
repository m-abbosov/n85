const time = document.getElementById("time")
const playBtn = document.getElementById("play")
const pauseBtn = document.getElementById("pause")
const audio = document.querySelector("audio")
const input = document.getElementById("input")

let timer = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString("it-IT")
    time.innerHTML = currentTime

    if (currentTime === "18:47:30") {
        audio.play()
    }
}, 1000)



playBtn.addEventListener("click", () => {
    // timer = setInterval(() => {
    //     const currentTime = new Date().toLocaleTimeString("it-IT")
    //     time.innerHTML = currentTime

    //     if (currentTime === "18:46:30") {
    //         audio.play()
    //     }
    // }, 1000)

    // audio.play()

    location.replace("https://google.com")
})

pauseBtn.addEventListener("click", () => {
    audio.pause()
})


input.addEventListener("input", (e) => {
    // console.log(e.target.value.length >= 10 ? "Meyordan oshib ketdi" : "Meyorda");
})


// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//         console.log(position.coords);
//     })
// } else {
//     console.log('this browser is not supported gelocation');
// }



// let batteryPromise = navigator.getBattery();

// batteryPromise.then((batteryObject) => {
//     console.log("IsCharging", batteryObject.charging);
//     console.log("Percentage", batteryObject.level);

//     console.log("charging Time", batteryObject.chargingTime);
//     console.log("DisCharging Time", batteryObject.dischargingTime / 60);
// });


// let copyBtn = document.querySelector(".copy-btn");
// let pasteBtn = document.querySelector(".paste-btn");
// let text = document.querySelector(".text");

// pasteBtn.addEventListener("click", () => {
//     navigator.clipboard.readText().then((res) => {
//         text.innerHTML += res;

//         console.log(res);

//     });



// });

// copyBtn.addEventListener("click", () => {
//     // navigator.clipboard.writeText(text.textContent);


//     navigator.clipboard.writeText(text.textContent)
// });


// console.log(location);



// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");

// nextBtn.addEventListener("click", () => {
//     console.log(history);

//     // history.forward();
//     // history.go(1);
//     history.pushState({}, "", "about.html");
// });

// prevBtn.addEventListener("click", () => {
//     console.log(history);

//     // history.back();
//     // history.go(-1);
//     history.pushState({}, "", "index.html");
// });


console.log(location.hostname, location.pathname);
