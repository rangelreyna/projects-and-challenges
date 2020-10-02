const body = document.querySelector('body');
const header = document.querySelector('.header');
const hamburgerBtn = document.getElementById('hamburger-btn');

function handleMobileMenu(e){
    if (!header.classList.contains("open")){
        hamburgerBtn.src = './images/icon-close.svg';
        header.classList.add("open");
        body.classList.add("no-scroll");
    } else {
        hamburgerBtn.src = './images/icon-hamburger.svg';
        header.classList.remove("open");
        body.classList.remove("no-scroll");
    }
}

hamburgerBtn.addEventListener('click', handleMobileMenu);