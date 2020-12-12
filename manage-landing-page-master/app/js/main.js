// Mobile Menu 
const body = document.querySelector('body');
const header = document.querySelector('.header');
const hamburgerBtn = document.getElementById('hamburger-btn');
// Footer Form 
const form = document.getElementById('footer-form'); 
const email = document.getElementById('footer-email'); 
const submitBtn = document.getElementById('footer-submit'); 
// Slider Functionality 
const slider = document.querySelector('.testimonials__slider');
const slides = Array.from(document.querySelectorAll('.testimonials__slide')); 
const dots = Array.from(document.querySelectorAll('.slider-dot')); 
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');
const slidePositions = {
    slide1: 'translateX(0%)',
    slide2: 'translateX(-105%)',
    slide3: 'translateX(-210%)',
    slide4: 'translateX(-315%)'
};
const slideTranslate = Object.keys(slidePositions);


/*** Mobile Menu ***/ 

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


/*** Footer Form ***/ 

function handleSubmit(e){
    e.preventDefault();

    if (!email.checkValidity()){
        form.classList.add("error");
    }
}

function handleFocus(){
    form.classList.remove("error");
}

submitBtn.addEventListener('click', handleSubmit);
email.addEventListener('focus', handleFocus);


/*** Slider Functionality ***/ 

function getActiveIndex(){
    const activeSlide = document.querySelector('.testimonials__slide.active');
    return slides.indexOf(activeSlide);
}

function handleDotEvent(index){
    const activeIndex = getActiveIndex();
    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    slider.style.transform = slidePositions[slideTranslate[index]];
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function handlePrev(){
    const activeIndex = getActiveIndex();

    if (activeIndex === 0){
        return;
    } 

    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    slider.style.transform = slidePositions[slideTranslate[activeIndex-1]];
    slides[activeIndex-1].classList.add('active');
    dots[activeIndex-1].classList.add('active');
}

function handleNext(){
    const activeIndex = getActiveIndex();

    if (activeIndex === slides.length-1){
        return;
    } 

    slides[activeIndex].classList.remove('active');
    dots[activeIndex].classList.remove('active');

    slider.style.transform = slidePositions[slideTranslate[activeIndex+1]];
    slides[activeIndex+1].classList.add('active');
    dots[activeIndex+1].classList.add('active');
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {handleDotEvent(index)});
});
prevBtn.addEventListener('click', handlePrev);
nextBtn.addEventListener('click', handleNext);