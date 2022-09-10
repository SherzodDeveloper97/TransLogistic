/* navbar sticky - open */

window.addEventListener('scroll', function () {
    var headerContent = document.querySelector(".header-top");
    headerContent.classList.toggle("sticky", window.scrollY > 650);
})

/* navbar sticky - close */

// Scroll Spy - Menu


/* humburger menu - JS open*/
const burger = document.querySelector('.burger');
const navMain = document.getElementById('nav-menu--mobile');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
    navMain.classList.toggle('active');
})

// Body Not-Scroll
const menuBtn = document.querySelector(".burger");
let menuOpen = false;
var x = document.getElementsByTagName("BODY")[0];

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        x.style.overflow = 'hidden';
    }
    else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        x.style.overflow = 'visible';
    }
});

/* humburger menu - JS close*/


// Slick slider


$('.clients-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    dots:true,
    autoplay: true,
});


/* scroll-to-top button - start */

const gotobtn = document.querySelector(".gotobtn");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 800) {
        gotobtn.classList.add("active_up");
    } else {
        gotobtn.classList.remove("active_up");
    }
})

/* scroll-to-top button - end */