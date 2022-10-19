const img = document.querySelector('img');


function getGif() {
    const searchValue = document.getElementById("search-bar").value;
    console.log(searchValue);
    const errorMsg = document.getElementById("errorMsg");

    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=in7QX5KN31koTJO4mVqdEQkM2uK3DPWy&s=${searchValue}`, { mode: 'cors' })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            errorMsg.textContent = "";
            img.src = response.data.images.original.url;

        })
        .catch((error) => {
            console.log(error);
            img.src = 'frowning-face_2639-fe0f.png';
            errorMsg.textContent = "No GIFs found.";
          });
}