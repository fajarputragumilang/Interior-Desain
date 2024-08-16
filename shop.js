const cart = document.querySelector("#cart");
const cartBtn = document.querySelector("#cartBtn");
const closeCart = document.querySelector("#closeCart");
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const section = document.querySelector('#section');


document.addEventListener("click", function (e) {
    if (e.target.closest("#hamburger") != e.target.closest("#navbar")) return;
    navbar.classList.add("hidden");
    hamburger.classList.remove('hamburger-active')
});
document.addEventListener("click", function (i) {
    if (i.target.closest("#cartBtn") != i.target.closest("#cart")) return;
    cart.classList.remove("show-cart");
    section.classList.remove("down");
});

hamburger.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
    hamburger.classList.toggle("hamburger-active");
});
cartBtn.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
    navbar.classList.add("hidden");
    closeCart.addEventListener("click", function () {
        cart.classList.remove("show-cart");
        section.classList.remove('down')
    });
    section.classList.toggle('down');

});

window.onscroll = function () {
    const section = document.querySelector("#header");
    const fixedNav = section.offsetTop;
    if (window.pageYOffset > fixedNav) {
        section.classList.add("navbar-fixed");
    } else {
        section.classList.remove("navbar-fixed");
    }
};
