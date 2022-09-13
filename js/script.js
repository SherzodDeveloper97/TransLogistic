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



/* Modal - open */

if(typeof document.querySelector('.modal__btn') !== 'undefined'){
    const modalBtns = document.getElementsByClassName('modal__btn');
    const modalWindow = document.getElementById('becomeClientModal');
    const BODY = document.querySelector('body');
    const btnsFormSubmit = document.getElementsByClassName('btn-form');
    const modalWindowTwo = document.getElementById('thanksModal');
    const inputValueName = document.getElementsByClassName('your__name');
    const inputValueNumber = document.getElementsByClassName('phone__number');
    const inputValueEmail = document.getElementsByClassName('your__email');
    
    

    for(const modalBtn of modalBtns){
        modalBtn.addEventListener('click', () => {
            modalWindow.classList.add('show');
            BODY.classList.add('no-scroll');
        })
    };
    
    const modalCloseBtns = document.getElementsByClassName('modal__close');
    
    for(const modalCloseBtn of modalCloseBtns){
        modalCloseBtn.addEventListener('click', () => {
            modalWindow.classList.remove('show');
            BODY.classList.remove('no-scroll');
            modalWindowTwo.classList.remove('show');
        })
    }

    const formElements = document.getElementsByClassName('header--form-content');

    for(const formElement of formElements){
        formElement.addEventListener('submit', (e) => {
            if((inputValueName.value !== '' || inputValueName.value !== null) && (inputValueNumber.value !== '' || inputValueNumber.value !== null) && (inputValueEmail.value !== '' || inputValueEmail.value !== null)){

                for(const btnFormSubmit of btnsFormSubmit){
                    btnFormSubmit.addEventListener('click', () => {
                        modalWindowTwo.classList.add('show');
                        modalWindow.classList.remove('show');
                    })
                }

            }
        })
    }

    

}




/* Modal - close */