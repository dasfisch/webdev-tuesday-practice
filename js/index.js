let gameIsRunning = true;
let i = 0;

function buttonHello(event) {
    gameIsRunning = false;

    let formIsValid = true;

    const firstNameField = document.getElementById('firstname');
    const firstNameLabel = document.getElementById('firstnamelabel');

    const lastNameField = document.getElementById('lastname');
    const lastNameLabel = document.getElementById('lastnamelabel');

    const emailNameField = document.getElementById('email');
    const emailNameLabel = document.getElementById('emaillabel');

    const firstNameValue = firstNameField.value.trim();
    const lastNameValue = lastNameField.value.trim();
    const emailValue = emailNameField.value.trim();

    if (firstNameValue.length === 0 || lastNameValue.length === 0 || emailValue.length === 0) {
        formIsValid = false;
    }

    if (formIsValid === false) {
        event.preventDefault();

        // for (let i = 0; i < labels.length; i++) {
        //     // labels[i].style.color = 'red';
        //     labels[i].className = labels[i].className + ' error';
        // }
    }

    if (firstNameValue.length === 0) {
        firstNameLabel.className = firstNameLabel.className + ' error';
    }

    if (lastNameValue.length === 0) {
        lastNameLabel.className = lastNameLabel.className + ' error';
    }

    if (emailValue.length === 0) {
        emailNameLabel.className = emailNameLabel.className + ' error';
    }
}

const listenToTyping = (event) => {
    const currentFieldId = event.target.id;

    const label = document.getElementById(currentFieldId + 'label');

    if (label.className.indexOf('error') === -1 && label.value.length === 0) {
        label.className = label.className + ' error';
    } else if (event.target.value.length > 0) {
        label.className = 'label';
    }
};

const button = document.getElementById('submit-button');
const form = document.getElementById('contact-form');
const labels = document.getElementsByClassName('label');
const inputs = document.getElementsByTagName('input');

form.addEventListener('submit', buttonHello);

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keypress', listenToTyping);
}
