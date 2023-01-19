class Book {
    constructor(bookCode, name, price) {
        this.bookCode = bookCode;
        this.name = name;
        this.price = price;
        this.author = "Mr";
    }
    geter = () => {}
    seter = () => {}

}
class ProgrammingBook extends Book {
    constructor(language, framework) {
        super();
        this.language = language;
        this.framework = framework;
    }

    geter = () => {
        console.log(this.name);
    }
    seter = (name, price, bookCode) => {

        this.name = name;
        this.price = price;
        this.bookCode = bookCode;
    }
}
let book1 = new ProgrammingBook();
book1.seter('Book name', 'Mr-1', '$1', 1);
console.log(book1.author);
book1.geter();