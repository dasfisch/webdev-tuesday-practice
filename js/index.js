const form = document.getElementById('to-dos');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

const submitButton = document.getElementById('submit');

let buttons = document.getElementsByTagName('button');

buttons = [
    ...buttons
];

const toDoItem = {
    id: 1,
    value: '',
    changeId: function(id) {
        this.id = id;
    },
    changeValue: function(value) {
        this.value = value;
    },
    validateMe: function() {
        return this.value.length > 10;
    }
};

let toDoList = [
    toDoItem
];

const logger = (event) => {
    if (toDoList.length === 10) {
        return;
    }

    const button = event.target;

    if (button.id === 'add-new') {
        const newItem = {
            ...toDoItem,
            id: Math.round(Math.random() * 100),
        };

        toDoList.push(newItem);

        renderToDoList();
        // Adds a new item to the list
    } else if (button.id === 'submit') {
        console.log('Submit was clicked', button, event);

        validateForm();
        // submits the item list
    } else {
        console.error('Unknown button', button, event);
    }
};

buttons.forEach((button, index) => {
    button.addEventListener('click', logger);
});

const holder = document.getElementById('form-holder');

const renderItem = (i, holder) => {
    const newItem = document.createElement('div');
    const newItemInput = document.createElement('input');
    const newItemLabel = document.createElement('label');
    const newItemError = document.createElement('p');
    const newItemRemover = document.createElement('a');

    // Code around newItem holder creation
    newItem.className = 'item';
    newItem.id = `form-item-${ i + 1 }`;

    // Code around label creation
    newItemLabel.htmlFor = `item-${ i + 1}`;
    newItemLabel.innerText = `To-do Item ${ toDoList[i].id }`;

    // Code around error creation
    newItemError.className = 'error';
    newItemError.innerText = `Enter valid to-do item ${ toDoList[i].id }`;

    // Code around input creation
    newItemInput.id = `item-${ i + 1}`;
    newItemInput.name = `item-${ i + 1}`;
    newItemInput.type = 'text';
    newItemInput.value = toDoList[i].value;

    // Code around remover
    newItemRemover.id = `item-remover-${ toDoList[i].id }`;
    newItemRemover.innerText = 'x'

    newItemInput.addEventListener('input', (e) => {
        const item = toDoList[i];

        const value = e.currentTarget.value;

        item.changeValue(value);

        if (item.validateMe() === false) {
            newItemError.style.display = 'flex';
        } else {
            newItemError.style.display = 'none';
        }

        validateForm();
    });

    newItemRemover.addEventListener('click', (e) => {
        const itemToRemoveIndex = toDoList.findIndex((element) => {
            return `item-remover-${ element.id }` === e.currentTarget.id;
        });

        const shifted = toDoList.shift();

        renderToDoList();
    });

    newItem.appendChild(newItemLabel);
    newItem.appendChild(newItemInput);
    newItem.appendChild(newItemRemover);
    newItem.appendChild(newItemError);

    holder.appendChild(newItem);
};

const renderToDoList = () => {
    holder.innerHTML = '';

    for (let i = 0; i < toDoList.length; i++) {
        renderItem(i, holder);
    }
};

function validateForm() {
    if (toDoList.every((item) => item.validateMe() === true) === false) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}
