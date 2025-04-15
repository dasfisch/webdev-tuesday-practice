let catPicture = '';

//https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg

function addCatPics(catPictures) {
    // The unordered list
    var listHolder = document.getElementById('catPics');
    listHolder.innerHTML = '';

    for (var i = 0; i < catPictures.length; i++) {
        // An array item
        catPicture = catPictures[i];

        // An html image
        const img = document.createElement('img');
        img.src = catPicture;
        img.height = 200;
        img.width = 200;

        // Add items to the list
        var child = document.createElement('li');
        child.appendChild(img);
        listHolder.appendChild(child);
    }
}
