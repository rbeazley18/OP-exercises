import './style.css';
import loadMenu from './menu.js';
import loadContact from './contact.js';
import loadHome from './home.js';

function siteTabs() {
    const tabDiv = document.createElement("div")
    tabDiv.setAttribute("id", "tab-div")
    const homeTab = document.createElement("button")
    homeTab.setAttribute("id", "home-tab")
    homeTab.innerText = "Home"
    const menuTab = document.createElement("button")
    menuTab.setAttribute("id", "menu-tab")
    menuTab.innerText = "Menu"
    const contactTab = document.createElement("button")
    contactTab.setAttribute("id", "contact-tab")
    contactTab.innerText = "Contact Us"
    
    homeTab.addEventListener("click", loadHome);
    menuTab.addEventListener("click", loadMenu);
    contactTab.addEventListener("click", loadContact);

    tabDiv.append(homeTab, menuTab, contactTab);

    return tabDiv;

}

function homePage() {
    const mainDiv = document.createElement("div")
    mainDiv.setAttribute("id", "main-div")

    return mainDiv;
}

function startHomePage() {
    const content = document.getElementById("content");
    content.appendChild(siteTabs());
    content.appendChild(homePage());
    loadHome();
    return content;
}

startHomePage()