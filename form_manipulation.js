//Question 2 Tasks 2 and 3

function handleFormSubmission(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessageElement = document.getElementById('error-message');

    errorMessageElement.textContent = '';

    if (!name || !email || !message) {
        errorMessageElement.textContent = 'All fields are required.';
        return;
    }

    const userData = {
        name: name,
        email: email,
        message: message
    };

    console.log('User Data:', userData);
}

const form = document.getElementById('contact-form');
form.addEventListener('submit', handleFormSubmission);
