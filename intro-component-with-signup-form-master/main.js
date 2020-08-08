const form = document.getElementById('form'); 
const firstName = document.getElementById('first-name'); 
const lastName = document.getElementById('last-name'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 

function handleSubmit(e){
    e.preventDefault();

    if (!firstName.checkValidity()){
        setError(firstName, "First Name cannot be empty");
    }

    if (!lastName.checkValidity()){
        setError(lastName, "Last Name cannot be empty");
    }

    if (!email.checkValidity() && email.value == ""){
        setError(email, "Email Address cannot be empty");
    } else if (!email.checkValidity()){
        setError(email, "Looks like this is not an email");
    }

    if (!password.checkValidity()){
        setError(password, "Password cannot be empty");
    }
}

function setError(input, message){ 
    let fieldContainer = input.parentElement; 
    let errorMsg = fieldContainer.querySelector('i');

    fieldContainer.classList.add("error");
    errorMsg.innerHTML = message;

    // only set opacity of placeholder to 0 if input field is empty  
    if (input.value == ""){
        fieldContainer.classList.add("clear");
    }
}

function handleFocus(e){
    let fieldContainer = e.target.parentElement; 

    fieldContainer.classList.remove("error");
    fieldContainer.classList.remove("clear");
}

form.addEventListener('submit', handleSubmit);
firstName.addEventListener('focus', handleFocus);
lastName.addEventListener('focus', handleFocus);
email.addEventListener('focus', handleFocus);
password.addEventListener('focus', handleFocus);
