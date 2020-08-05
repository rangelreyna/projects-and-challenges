const form = document.getElementById('form'); 
const email = document.getElementById('email'); 
const error_icon = document.querySelector('.error-icon'); 
const tooltip = document.querySelector('.tooltip'); 

function handleSubmit(e){
    e.preventDefault();

    if (!email.checkValidity()){
        email.classList.add("error");
        error_icon.style.visibility = "visible";
        tooltip.classList.remove("success");
        tooltip.classList.add("error");
        tooltip.innerHTML = "Please provide a valid email";
    } else {
        tooltip.classList.remove("error");
        tooltip.classList.add("success");
        tooltip.innerHTML = "Thanks! You will receive an email when our site launches!";
        form.reset();
    }
}

function handleFocus(){
    email.classList.remove("error");
    error_icon.style.visibility = "hidden";
    tooltip.innerHTML = "";
}

form.addEventListener('submit', handleSubmit);
email.addEventListener('focus', handleFocus);
