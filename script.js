const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn'); // corrected this line
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active'); 
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active'); 
});


