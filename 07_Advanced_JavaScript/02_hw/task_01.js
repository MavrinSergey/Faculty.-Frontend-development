"use strict"
    // Данную задачу делал вместе с Николаем Беляевым
class ManageLibrary {
    #books = []

    constructor(arrayBooks) {
        arrayBooks.forEach(book => {
            this.addBook(book)
        })
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        const checkBook = this.hasBook(title)
        try {
            if (typeof checkBook === "number") {
                throw new Error("Can't add your book: Library already contains this book.")
            }
        } catch (error) {
            console.log(error.message);
            return;
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const checkBook = this.hasBook(title)
        try {
            if (typeof checkBook === "boolean") {
                throw new Error("Can't delete your book: there's no such book in Library.")
            }
        } catch (error) {
            console.log(error.message);
            return;
        }
        this.#books.splice(checkBook, 1)
    }

    hasBook(title) {
        let indexBook;
        let res = this.#books.some((book, index) => {
            indexBook = index;
            return book === title
        })
        return (res ? indexBook : false)
    }
}

const art = new ManageLibrary(["слон", "слон", "кот", "собака", "кот", "курица", "собака"])
console.log(art.allBooks)
art.removeBook('fas')
console.log(art.allBooks)
art.removeBook('asd')
console.log(art.allBooks)

