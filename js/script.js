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


const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
