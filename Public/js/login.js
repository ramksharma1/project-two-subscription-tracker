// Allows login

const loginFormHandler = async (event) => {
    event.preventDefault();

    // Creates values of input
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //Relocates to dashboard
            document.location.replace('/dashboard');
        } else {
            alert('Failed to log in.')
        }
    }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);