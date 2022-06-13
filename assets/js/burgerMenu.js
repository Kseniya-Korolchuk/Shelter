export default function burgerMenu() {
    const navBurger = document.querySelector('.nav__burger');
    const navMenu = document.querySelector('.nav__menu');
    const logoDesktop = document.querySelector('.header__container .logo');
    const logoBurger = document.querySelector('.nav__header .logo');
    const navDesktop = document.querySelector('.nav');
    const blackout = document.querySelector('.blackout');
    const navItems = document.querySelectorAll('.nav__burger-item');
    const body = document.querySelector('body');

    navBurger.onclick = function(){
        navMenu.classList.toggle('active');
        navBurger.classList.toggle('active');
        logoDesktop.classList.toggle('logo-hidden');
        body.classList.toggle('locked');
        blackout.classList.toggle('active');
    }

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].onclick = function () {
            navBurger.classList.remove('active');
            navMenu.classList.remove('active');
            logoDesktop.classList.remove('logo-hidden');
            body.classList.remove('locked');
            blackout.classList.remove('active');
        }
    }

    logoBurger.onclick = function() {
        navBurger.classList.remove('active');
        navMenu.classList.remove('active');
        logoDesktop.classList.toggle('logo-hidden');
    }

    blackout.onclick = function() {
        navBurger.classList.remove('active');
        navMenu.classList.remove('active');
        logoDesktop.classList.remove('logo-hidden');
        body.classList.remove('locked');
        blackout.classList.remove('active');
    }

}