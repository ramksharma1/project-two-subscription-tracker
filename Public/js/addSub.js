async function addSubscriptionFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#subName1');
    const description = document.querySelector('#description1');
    const link = document.querySelector('#link1');
    const date = document.querySelector('#initDate1');
    const cycle = document.querySelector('#cycle1');
    const payment = document.querySelector('#payment1');
    const remind = document.querySelector('#remind1');


    if ("") {
        const response = await fetch ('/api/subscriptions/', {
            method: 'POST',
            body: JSON.stringify({
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            console.log('success');

            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}