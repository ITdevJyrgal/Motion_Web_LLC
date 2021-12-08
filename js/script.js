// let btn = document.querySelector('.row__card__frontend');
//
// btn.addEventListener('mouseover', () => {
//     document.querySelector(".row__card--card").style.background = " #714634 "
// })


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

//////////////////////////////////////////////////////
// let title = document.querySelector( ".row--title__btn")
// title.addEventListener( "click", ()  => {
//     console.log(123)
//     document.querySelector(".push").style.display = "block"
// })


// let titleClose = document.querySelector(".row--title__btn")
// titleClose.addEventListener("click", () => {
//     console.log(12334)
//     document.querySelector(".push").style.display = "block"
// })
//
//
// let btn009867 = document.querySelector('.row--title__btn');
// let modal009867 = document.getElementsByClassName('push');

// btn009867.addEventListener("click" , ()=> {
//     document.querySelector(".push").style.display = "block"
// })

// let btnM = document.querySelector(".row--title__btn")
// btnM.onclick = function() {
//     console.log("sdfghjk")
//     modal009867.style.display = "block";
// }
// btnM.addEventListener("click", () => {
//     console.log('mdcscsdcnnj')
//     document.querySelector(".push").style.display = "block"
// })

// let btn009867 = document.getElementsByClassName('row--title__btn');
// btn009867.addEventListener( "click", () => {
//     modal009867.style.display = "block";
//     console.log("newa")
// })










let card = document.querySelector(".row--card--btn-2")
card.addEventListener("click", () => {
    document.querySelector(".row--card__block").style.display = "block"
})

let cardClose = document.querySelector(".row--card__vk")
cardClose.addEventListener("click", () => {
    document.querySelector(".row--card__block").style.display = "none"
})







//
//xx

let btnOffer = document.querySelector(".row--offer__btn")
btnOffer.addEventListener('click',() =>{
    document.querySelector('.row--offer__block').style.display = 'block'
    console.log(1653)
})

let btnOfferClose = document.querySelector(".row--offer__vk")
btnOfferClose.addEventListener('click',()=>{
    document.querySelector('.row--offer__block').style.display = 'none'
})





























