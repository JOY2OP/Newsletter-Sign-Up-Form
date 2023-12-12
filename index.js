console.log("yes")

const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', function(e){
    e.preventDefault()
    const email = document.getElementById('email')
    localStorage.setItem('email', email.value);
    window.location.href = 'success.html'
})

    // console.log(email);
