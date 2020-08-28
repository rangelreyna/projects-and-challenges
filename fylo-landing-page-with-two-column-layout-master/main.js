const headerForm = document.getElementById('header-form'); 
const promoForm = document.getElementById('promo-form'); 
const headerEmail = document.getElementById('header-email'); 
const promoEmail = document.getElementById('promo-email');  

function handleSubmit(e){
    e.preventDefault();
    email = e.target.parentElement.querySelector('input');

    if (!email.checkValidity() && email.value == ""){
        setError(email, "Email Address cannot be empty");
    } else if (!email.checkValidity()){
        setError(email, "Looks like this is not an email");
    }

}

function setError(input, message){ 
    let fieldContainer = input.parentElement; 
    let errorMsg = fieldContainer.querySelector('i');

    fieldContainer.classList.add("error");
    errorMsg.innerHTML = message;
}

function handleFocus(e){
    let fieldContainer = e.target.parentElement; 

    fieldContainer.classList.remove("error");
}

headerForm.addEventListener('submit', handleSubmit);
promoForm.addEventListener('submit', handleSubmit);
headerEmail.addEventListener('focus', handleFocus);
promoEmail.addEventListener('focus', handleFocus);
