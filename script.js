const swiper = new Swiper(".swiper", {
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBlullets: true,
    },
});

const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");





hamburger.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
});

document.addEventListener('click', function(e) {
    if(e.target.closest('#hamburger') != e.target.closest('#navbar')) return 
        navbar.classList.add('hidden')
})




window.onscroll = function () {
    const section = document.querySelector("#header");
    const fixedNav = section.offsetTop;
    if (window.pageYOffset > fixedNav) {
        section.classList.add("navbar-fixed");
    } else {
        section.classList.remove("navbar-fixed");
    }
};