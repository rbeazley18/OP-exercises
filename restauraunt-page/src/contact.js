function createContact() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv")
    const title = document.createElement("h1");
    const tagline = document.createElement("p");
    tagline.classList.add("tagline");
    tagline.innerText = "1-800-pancakes"
    title.classList.add("title")
    title.innerText = "Contact Us"

    contactDiv.append(title, tagline)

    return contactDiv;
}

function loadContact() {
    const contact = document.getElementById("main-div");
    contact.textContent = ""
    contact.append(createContact());
}


export default loadContact;