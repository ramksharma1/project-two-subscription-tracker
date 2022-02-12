async function registrationFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(username);

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


            document.location.replace('/dashboard'); // verify name dashboard

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#registration-form').addEventListener('submit', registrationFormHandler);