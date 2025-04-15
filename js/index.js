console.log('hi');

window.addEventListener('load', (event) => {
    const catNames = [];

    const catForm = document.getElementById('cat_name_form');
    const catFormNameError = document.getElementById('cat-name-error');

    catForm.addEventListener('submit', (event2) => {
        event2.preventDefault();

        const catNameField = document.getElementById('cat_name');

        const catName = catNameField.value;

        if (validateUrl(catName) === false) {
            catFormNameError.classList = 'error';

            return;
        }

        catFormNameError.classList = 'error hidden';

        catNames.push(catName);

        addCatPics(catNames);
    });
});

function validateUrl(value) {
    return /^(https?:\/\/.*\.(?:png|jpg|jpeg))$/i.test(value);
}

// document.addEventListener('click', (event) => {
//     addCatPics();
// });


//index.js:7 Uncaught TypeError: document.onclick is not a function
