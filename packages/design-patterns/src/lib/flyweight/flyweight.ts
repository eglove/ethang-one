export class Book {
  public author: string;
  public isbn: string;
  public title: string;

  constructor(author: string, isbn: string, title: string) {
    this.author = author;
    this.isbn = isbn;
    this.title = title;
  }
}

const books: Map<string, Book> = new Map();
const bookList: Book[] = [];

const createBook = (author: string, isbn: string, title: string): Book => {
  const existingBook = books.has(isbn);

  if (existingBook) {
    return books.get(isbn)!;
  }

  // Reuse constructor to avoid creating new object all the time
  const book = new Book(author, isbn, title);
  books.set(isbn, book);

  return book;
};

const addBook = (
  author: string,
  isbn: string,
  title: string,
  availability: boolean,
  sales: number
): Book => {
  const book = {
    ...createBook(author, isbn, title),
    availability,
    isbn,
    sales,
  };

  bookList.push(book);
  return book;
};

addBook('JK Rowling', 'AB123', 'Harry Potter', false, 100);
addBook('JK Rowling', 'AB123', 'Harry Potter', true, 50);
addBook('Harper Lee', 'CD345', 'To Kill a Mockingbird', true, 10);
addBook('Harper Lee', 'CD345', 'To Kill a Mockingbird', false, 20);
addBook('F. Scott Fitzgerald', 'EF567', 'The Great Gatsby', false, 20);
console.info(bookList);
