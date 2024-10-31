import { printNamesToScreen } from './printing-functions/index.js';

let gameIsRunning = true;
let i = 0;

const users =
    window.localStorage.getItem('users') !== null ?
        JSON.parse(window.localStorage.getItem('users')) :
        new Array();

// What we want to know about a new user: first, last, email
const user = {
    first_name: '',
    last_name: '',
    email: ''
};

function addUser(event) {
    if (typeof event === 'undefined') {
        throw new Error('You didnt pass an error!');
    }

    event.preventDefault();

    gameIsRunning = false;

    const firstNameField = document.getElementById('firstname');
    const firstNameLabel = document.getElementById('firstnamelabel');

    const lastNameField = document.getElementById('lastname');
    const lastNameLabel = document.getElementById('lastnamelabel');

    const emailNameField = document.getElementById('email');
    const emailNameLabel = document.getElementById('emaillabel');

    const firstNameValue = firstNameField.value.trim();
    const lastNameValue = lastNameField.value.trim();
    const emailValue = emailNameField.value.trim();

    const formIsValid = emailValue.length > 0 &&
        firstNameValue.length > 0 &&
        lastNameValue.length > 0;

    if (formIsValid === false) {
        if (firstNameValue.length === 0) {
            firstNameLabel.className = firstNameLabel.className + ' error';
        }

        if (lastNameValue.length === 0) {
            lastNameLabel.className = lastNameLabel.className + ' error';
        }

        if (emailValue.length === 0) {
            emailNameLabel.className = emailNameLabel.className + ' error';
        }
    } else {
        const newUser = Object.assign({}, user);

        newUser.email = emailValue;
        newUser.first_name = firstNameValue;
        newUser.last_name = lastNameValue;

        newUser.name = `${ newUser.first_name } ${ newUser.last_name }`;

        users.push(newUser);

        window.localStorage.setItem('users', JSON.stringify(users));

        printSingleUserToScreen(newUser);
    }
}

const listenToTyping = (event) => {
    console.log('here');
    const currentFieldId = event.target.id;

    const label = document.getElementById(currentFieldId + 'label');

    if (label.className.indexOf('error') === -1 && event.target.value.length === 0) {
        label.className = label.className + ' error';
    } else if (event.target.value.length > 0) {
        label.className = 'label';
    }
};

function reqListener() {
    console.log(this.responseText);
}

const getUsers = () => {
    console.log('user');

    const req = new XMLHttpRequest();

    req.addEventListener("load", reqListener);
    req.open("GET", "http://localhost:3000/users/");
    req.send();
};

const form = document.getElementById('contact-form');
const inputs = document.getElementsByTagName('input');

form.addEventListener('submit', addUser);

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keypress', listenToTyping);
}

getUsers();
