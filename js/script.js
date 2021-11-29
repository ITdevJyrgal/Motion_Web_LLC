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


let pol = document.querySelector(".row--title__btn2")
pol.addEventListener("click", () => {
    document.querySelector(".row--title__block").style.display = "block"
})

let close = document.querySelector(".row--title__vk")
close.addEventListener("click", () => {
    document.querySelector(".row--title__block").style.display = "none"
})


const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 50,
        modifier: 8,
        slideShadows: true,
        autoplay: {
            delay: 5000,
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
swiper()

