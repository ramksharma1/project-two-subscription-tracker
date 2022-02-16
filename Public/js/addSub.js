async function addSubscriptionFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('#subName1').value.trim();
    const description = document.querySelector('#description1').value.trim();
    const link = document.querySelector('#link1').value.trim();
    const date = document.querySelector('#initDate1').value.trim();
    const cycle = document.querySelector('#cycle1').value.trim();
    const payment = document.querySelector('#payment1').value.trim();
    const remind = document.querySelector('#remind1').value.trim();



    if (name, description, link, date, cycle, payment, remind) {

        const response = await fetch ('/api/subscriptions/', {
            method: 'POST',
            body: JSON.stringify({
                subname,
                description,
                link,
                cycle,
                date,
                payment,
                remind
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            console.log('success');

            // document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#addSub').addEventListener('submit', addSubscriptionFormHandler);