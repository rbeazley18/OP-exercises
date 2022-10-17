import Pancakes from './pancakes.jpg';

function createHome() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("homeDiv")
    const title = document.createElement("h1");
    const tagline = document.createElement("p");
    tagline.classList.add("tagline");
    tagline.innerText = "Best pancakes around!"
    title.classList.add("title")
    title.innerText = "Pancake House"
    const myPancakes = new Image();
    myPancakes.src = Pancakes;

    homeDiv.append(myPancakes, title, tagline)

    return homeDiv;
}

function loadHome() {
    const home = document.getElementById("main-div");
    home.textContent = ""
    home.append(createHome());
}


export default loadHome;
