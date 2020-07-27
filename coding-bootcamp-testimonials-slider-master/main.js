const left_button = document.querySelector('.left-button'); 
const right_button = document.querySelector('.right-button'); 
const img_container = document.querySelector('.img-container'); 
const quote = document.querySelector('.quote'); 
const name = document.querySelector('.name'); 
const title = document.querySelector('.title'); 

// testimonial data 
let testimonials = {
    person1: {
        name: 'Tanya Sinclair',
        title: 'UX Engineer',
        image: 'url(./images/image-tanya.jpg)',
        quote: '\“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. \”'
    }, 
    person2: {
        name: 'John Tarkpor',
        title: 'Junior Front-end Developer',
        image: 'url(./images/image-john.jpg)',
        quote: '\“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”'
    }
};

// testimonial keys array 
let people = Object.keys(testimonials);
let numPeople = people.length; 
let i = 0; // starting index 


function handleEventLeft(){
    // calculate index position
    if (i === 0){
        i = numPeople - 1;
    } else {
        i -= 1;
    }

    // target testimonial
    let testimonial = testimonials[people[i]];

    img_container.style.backgroundImage = testimonial.image;
    quote.innerHTML = testimonial.quote;
    name.innerHTML = testimonial.name;
    title.innerHTML = testimonial.title;
}

function handleEventRight(){
    // calculate index position 
    if (i === numPeople-1){
        i = 0;
    } else {
        i += 1;
    }

    // target testimonial
    let testimonial = testimonials[people[i]];

    img_container.style.backgroundImage = testimonial.image;
    quote.innerHTML = testimonial.quote;
    name.innerHTML = testimonial.name;
    title.innerHTML = testimonial.title;
}

left_button.onclick = handleEventLeft; 
right_button.onclick = handleEventRight;
document.onkeydown = e => {
    let key = e.keyCode;
    if (key == 37){
        handleEventLeft();
    } else if (key == 39){
        handleEventRight();
    }
};
