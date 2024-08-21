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


window.onload = function() {
    setTimeout(function() {
        document.getElementById("loader").classList.add('loading')
    }, 2000);
}





hamburger.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
    hamburger.classList.toggle('hamburger-active');
});

document.addEventListener('click', function(e) {
    if(e.target.closest('#hamburger') != e.target.closest('#navbar')) return 
        navbar.classList.add('hidden');
        hamburger.classList.remove('hamburger-active')
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