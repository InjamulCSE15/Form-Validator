const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message:
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }

// Show success outline:
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Email Check validation:
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

// Check required fields:
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        //console.log(input.value);
    if(input.value.trim() === '') {
        console.log(input.id);
        showError(input, `${getFieldName(input)} is required.`);
    }
    else {
        showSuccess(input);
    }
    });

}

// Check input length: 
function checkLength(input, min, max){
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters.`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
    }
    else showSuccess(input);
}

// Check Password Match:
function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password do not match');
    } 
    else if (input2.value === '') {
        showError(input2, 'Please re-type your password.');
    }
    else{
        showSuccess(input2);
    }
}

// Get Field Name:
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners: 
form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(username.value);

    checkRequired([username, email, password]);
    checkLength(username, 5, 15);
    checkLength(password, 8, 20);
    checkEmail(email);
    passwordMatch(password, password2);

    /* Try to simple functions:
    
    if(username.value === ''){
        showError(username, 'User name must be required');
    }
    else {
        showSuccess(username);
    }
    
    if(email.value === ''){
        showError(email, 'Email must be required');
    }
    else if(!validEmail(email.value)){
        showError(email, 'Email is not valid');
    }
    else {
        showSuccess(email);
    }
    
    if(password.value === ''){
        showError(password, 'Password must be required');
    }
    else {
        showSuccess(password);
    }
    
    if(password2.value === ''){
        showError(password2, " Password doesn't match");
    }
    else {
        showSuccess(password2);
    }
    */
});