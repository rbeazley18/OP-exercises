function createMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv")
    const title = document.createElement("h1");
    const tagline = document.createElement("p");
    tagline.classList.add("tagline");
    tagline.innerText = "Triple stack"
    title.classList.add("title")
    title.innerText = "Menu"

    menuDiv.append(title, tagline)

    return menuDiv;
}

function loadMenu() {
    const menu = document.getElementById("main-div");
    menu.textContent = ""
    menu.append(createMenu());
}


export default loadMenu;