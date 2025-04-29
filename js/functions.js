function getCountryNames(){
    fetch('https://restcountries.com/v3.1/all')
        .then(response => {
            return response.json();
        })
        .then(data => {
            data.map(country => {
                addCountryNameToList(country.name.common)
            });
        });
}

function addCountryNameToList(countryName){
    const countryList = document.getElementById('country-list');
    const listItem = document.createElement('li');
    listItem.textContent = countryName;
    countryList.appendChild(listItem);
}

function searchCountries(filterObj) {
    if(filterObj.id !== 'country-search'){
        return;
    }

    const countryList = document.getElementById('country-list');
    const listItems = countryList.getElementsByTagName('li');

    for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        if (listItem.textContent.toLowerCase().includes(filterObj.value.toLowerCase())) {
            listItem.style.display = '';
        } else {
            listItem.style.display = 'none';
        }
    }
}

// Add an event listener on page load and load country data
document.addEventListener('DOMContentLoaded', function() {
    getCountryNames();
});