
const img = document.querySelector('img');


async function getGif() {
    const searchValue = document.getElementById("search-bar").value;
    console.log(searchValue);
    const errorMsg = document.getElementById("errorMsg");

    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=lGZXJR6CI0fLnqCCd3H5uxwxfADN6tSt&s=${searchValue}`, { mode: 'cors' });
        const catData = await response.json();
        errorMsg.textContent = "";
        img.src = catData.data.images.original.url;
    } catch (error) {
        console.log(error);
        img.src = 'frowning-face_2639-fe0f.png';
        errorMsg.textContent = "No GIFs found.";
    }
}
