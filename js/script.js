
let btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    document.querySelector("#modalWin").style.display = "block"
})

let closeBtn = document.querySelector(".btn-close")
closeBtn.addEventListener("click", () => {
    document.querySelector("#modalWin").style.display = "none"
})


let block = document.querySelector(".row--title__btn2")
block.addEventListener("click", () => {
    console.log('mnnj')
    document.querySelector(".row--title__block").style.display = "block"
})

let blockClose = document.querySelector(".row--title__vk")
blockClose.addEventListener("click", () => {
    document.querySelector(".row--title__block").style.display = "none"
})
//




let square = document.querySelector(".row--title__btn")
square.addEventListener("click", () => {
    document.querySelector(".row--title__block").style.display = "block"
    console.log(124)
})

let squareClose = document.querySelector(".row--title__vk")
squareClose.addEventListener("click", () => {
    document.querySelector(".row--title__block").style.display = "none"
})
let modal = document.querySelector('.row--title__block')
console.log(modal)
let orderBtn = document.querySelector(".row--title__btn")
orderBtn.addEventListener("click", () => {
    console.log(234)
    console.log(document.querySelector("#header.row--title__block"))
    modal.classList.add("click")
})


let card = document.querySelector(".row--card--btn-2")
card.addEventListener("click", () => {
    document.querySelector(".row--card__block").style.display = "block"
})

let cardClose = document.querySelector(".row--card__vk")
cardClose.addEventListener("click", () => {
    document.querySelector(".row--card__block").style.display = "none"
})

