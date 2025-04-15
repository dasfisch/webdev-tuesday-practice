const catPictures = [
    "https://purepng.com/public/uploads/large/51502305566rtsfses9licuhzwzwc7hwh72e9boqm9vseph08hvvkhxgljuvmepx0w1xzaphsjwx0aftsgcwjfww6pmfytkr5pb6er0mmwugqnp.png",
    "https://purepng.com/public/uploads/large/51502305566rtsfses9licuhzwzwc7hwh72e9boqm9vseph08hvvkhxgljuvmepx0w1xzaphsjwx0aftsgcwjfww6pmfytkr5pb6er0mmwugqnp.png"
];

let catPicture = '';

function addCatPics()
{
    for(var i=0;i<catPictures.length;i++)
    {
        // An array item
        catPicture = catPictures[i];
    
        // An html image
        const img = document.createElement("img");
        img.src = catPicture;
        img.height = 200;
        img.width = 200;
    
        // The unordered list
        var listHolder = document.getElementById("catPics");
        // Add items to the list
        var child = document.createElement("li");
        child.appendChild(img);
        listHolder.appendChild(child);
    }
}
