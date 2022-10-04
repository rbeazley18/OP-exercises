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

const reader1 = new Book('Dune', 'unknown', '20', 'read')

console.log(reader1.info())