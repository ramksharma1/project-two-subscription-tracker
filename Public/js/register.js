//  Allows you to register to the cite 
async function registrationFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // check if user is logged in before you get rerouted
    if (username && email && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 
                'Content-Type': 'application/json' 
            }
        });
        if (response.ok) {
            console.log('success');


            document.location.replace('/');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#registration-form').addEventListener('submit', registrationFormHandler);
