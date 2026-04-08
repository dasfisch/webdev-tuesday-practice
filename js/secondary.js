let value = 12;

function myfunc() {
    console.log('this 2', this);
    console.log(value, 'in function');
};

window.addEventListener('click', myfunc);

window.addEventListener('click', () => {
    value = 13;

    myfunc();
});


renderToDoList();
