function Books(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

const books = new Books('Darkness within Yourself', 'Nish B.k', 195, 'not read yet!');

console.log(books.info());
