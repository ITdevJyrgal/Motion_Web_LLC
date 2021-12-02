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

////////////////////////////////////////////////////////////////

let block = document.querySelector(".row--title__btn2")
block.addEventListener("click", () => {
    document.querySelector(".row--title__block").style.display = "block"
})

let blockClose = document.querySelector(".row--title__vk")
blockClose.addEventListener("click", () => {
    document.querySelector(".row--title__block").style.display = "none"
})

////////////////////////////////////////////////////////////////////
let card = document.querySelector(".row--card--btn-2")
card.addEventListener("click", () => {
    document.querySelector(".row--card__block").style.display = "block"
})

let cardClose = document.querySelector(".row--card__vk")
cardClose.addEventListener("click", () => {
    document.querySelector(".row--card__block").style.display = "none"
})


///////////////////////////////////////////////////////////////////
// let square = document.querySelector(".row--after__btn2")
// square.addEventListener("click", () => {
//     document.querySelector(".row--after__block").style.display = "block"
// })
//
// let squareClose = document.querySelector(".row--after__vk")
// squareClose.addEventListener("click", () => {
//     document.querySelector(".row--after__block").style.display = "none"
// })
////////////////////////////////////////////////////////////////////////////////

const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
swiper ()

