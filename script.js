const mobileToggle = document.querySelector('.mobile-toggle');

const mainNav = document.querySelector('.main-nav');

mobileToggle.addEventListener('click', () => {

    mainNav.classList.toggle('mobile-active');

});