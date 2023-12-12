console.log("yes")

const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', function(e){
    e.preventDefault()
    const email = document.getElementById('email').value
    console.log(email);
})