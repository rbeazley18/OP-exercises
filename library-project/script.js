const addBookBtn = document.getElementById("add-book-btn")
const addBookForm = document.getElementById("add-book-form")
const form = document.createElement("form")
form.setAttribute("method", "post")
form.setAttribute("action", "javascript:;")
const titleForm = document.createElement("input")
titleForm.setAttribute("type", "text")
titleForm.setAttribute("id", "title")
titleForm.setAttribute("placeholder", "Title")
const authorForm = document.createElement("input")
authorForm.setAttribute("type", "text")
authorForm.setAttribute("id", "author")
authorForm.setAttribute("placeholder", "Author")
const pagesForm = document.createElement("input")
pagesForm.setAttribute("type", "text")
pagesForm.setAttribute("id", "pages")
pagesForm.setAttribute("placeholder", "Pages")
const readForm = document.createElement("input")
readForm.setAttribute("type", "text")
readForm.setAttribute("id", "read")
readForm.setAttribute("placeholder", "Read")
const submitBtn = document.createElement("input")
submitBtn.setAttribute("type", "submit")
submitBtn.setAttribute("value", "Submit")
const displayLibraryBtn = document.getElementById("view-library")
form.append(titleForm, authorForm, pagesForm, readForm, submitBtn)

const container = document.getElementById("container")
const libraryList = document.createElement("div")
// libraryList.setAttribute("class", "prettyprint")
// const bookList = document.getElementById("book-list")
container.append(libraryList);

addBookBtn.onclick = () => addBookToLibrary();
submitBtn.onclick = () => submitBook();
displayLibraryBtn.onclick = () => displayLibrary();

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return {
            title, author, pages, read
        }
    }
}

function displayLibrary() {
    const books = JSON.stringify(myLibrary, null, 4);
    console.log(books)
    libraryList.innerText = books;
}

function submitBook() {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    console.log(title);
    const newBook = new Book(title, author, pages, read)
    console.log(newBook)
    return myLibrary.push(newBook)
}

function addBookToLibrary() {
    addBookForm.append(form);
}

console.info(myLibrary)



// console.log(submitBook.info())