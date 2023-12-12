const emailForm = document.getElementById('emailForm');
const emailError = document.querySelector('.email-box__error')
const email = document.getElementById('email');
const button=document.querySelector('.email-box__subscribe')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(){
if (emailRegex.test(email.value)){
    localStorage.setItem('email', email.value);
    window.location.href = 'success.html'
} else{
    emailError.style.display = 'block';
    email.classList.add("input-error");
}
}

