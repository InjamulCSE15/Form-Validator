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

// Event listeners: 
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(username.value);

    if(username.value === ''){
        showError(username, 'User name must be required');
    }
    else {
        showSuccess(username);
    }
    
    if(email.value === ''){
        showError(email, 'Email must be required');
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
});