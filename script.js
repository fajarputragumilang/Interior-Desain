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




// window.addEventListener("load", function () {
//    // Hide the loader after the page has fully loaded
//     setTimeout(() => {
//     document.getElementById("loader").classList.add('loading');
//     bulat.forEach(function (bulat) {
//         bulat.classList.add('hidden')
//     });
//     },3000)
// });

// function shouldShowLoader() {
//             return !localStorage.getItem('loaded');
//         }

//         // If the page was refreshed, show the loader
//         if (shouldShowLoader()) {
//             document.getElementById('loader').classList.remove('hidden');
//             window.addEventListener("load", function() {
//                 setTimeout(() => {
//                     document.getElementById("loader").classList.add('hidden');
//                     localStorage.setItem("loaded", true); 
//                 },2000);
                  
//             });
//         } else {
//             // If navigating internally, skip the loader
//                 document.getElementById("loader").classList.add('hidden')
//         }

//         // Reset loader status on refresh
//         window.addEventListener("beforeunload", function() {
//             localStorage.removeItem('loaded');
//         });

//         // Optional: Handle 'Home' button click if it's an internal link
//         document.querySelector('#home').addEventListener('click', function() {
//             localStorage.setItem('loaded', true);
//         });


function hideLoader(e) {
    setTimeout(() => { 
        document.getElementById("loader").classList.add("hidden");
    }, 3000);
}
hideLoader();



hamburger.addEventListener("click", function () {
    navbar.classList.toggle("hidden");
    hamburger.classList.toggle('hamburger-active');
});

document.addEventListener('click', function (e) {
    if (e.target.closest('#hamburger') != e.target.closest('#navbar')) return
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