document.addEventListener('DOMContentLoaded', function() {

    const signUpButton = document.querySelector('#signUpButton');
    if (signUpButton) {
        signUpButton.addEventListener('click', function() {
            const fullName = document.querySelector('#fullName').value;
            const username = document.querySelector('#username').value;
            const email = document.querySelector('#email').value;
            const createPassword = document.querySelector('#createPassword').value;
            const confirmPassword = document.querySelector('#confirmPassword').value;

            if (createPassword !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            localStorage.setItem('userFullName', fullName);
            localStorage.setItem('username', username);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', createPassword);

            window.location.href = '/pages/signin.html';
        });
    }

    const loginButton = document.querySelector('#loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            const email = document.querySelector('#loginEmail').value;
            const password = document.querySelector('#loginPassword').value;

            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            if (email === storedEmail && password === storedPassword) {
                alert('User logged in successfully!');
                window.location.href = '/pages/user-account.html';
            } else {
                alert('Invalid email or password!');
            }
        });
    }
});