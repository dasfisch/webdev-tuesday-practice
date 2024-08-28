let gameIsRunning = true;
let i = 0;

function buttonHello(event) {
    gameIsRunning = false;

    let formIsValid = true;

    const firstNameValue = document.getElementById('firstname').value.trim();
    const lastNameValue = document.getElementById('lastname').value.trim();
    const emailValue = document.getElementById('email').value.trim();

    if (firstNameValue.length === 0 || lastNameValue.length === 0 || emailValue.length === 0) {
        formIsValid = false;
    }

    if (formIsValid === false) {
        event.preventDefault();

        for (let i = 0; i < labels.length; i++) {
            labels[i].style.color = 'red';
        }
    }
}

const button = document.getElementById('submit-button');
const form = document.getElementById('contact-form');
const labels = document.getElementsByClassName('label');

form.addEventListener('submit', buttonHello);
