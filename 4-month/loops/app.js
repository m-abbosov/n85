let urinishSoni = 3;

alert("bu o'yin 1 dan tepa 100 dan past. Man 1 ta son o'yliman, siz topshiz kerak")

let rozilik = confirm("Rozilik bildirasizmi?")

if (rozilik) {
    alert(`Demak boshladik. Men son o'ladim. Sizda ${urinishSoni}ta urinish bor`)
    const randomNum = Math.floor(Math.random() * 100 + 1)
    let enteredNum = +prompt("Son kiriting!")

    while (randomNum != enteredNum) {
        if (randomNum > enteredNum) {
            alert("Katta")
        } else {
            alert("Kichik")
        }
        urinishSoni--;

        if (urinishSoni === 0) {
            alert("Urinishlar soni tugati. Yutqazdingiz")
            break;
        }
        alert(`Sizda ${urinishSoni}ta urinish soni qoldi!`)
        enteredNum = +prompt("Boshqa son kiriting!")

    }
    if (randomNum === enteredNum) {
        alert(`Uraa topdingizz! ${10 - urinishSoni}ta urinishda topdingiz!`)
    }

} else {
    alert("E'tiboringiz uchun rahmat!")
}