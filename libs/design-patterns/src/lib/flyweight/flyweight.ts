export class Book {
  constructor(
    public author: string,
    public isbn: string,
    public title: string
  ) {}
}

const books: Map<string, Book> = new Map();
const bookList: Book[] = [];

const createBook = (author: string, isbn: string, title: string): Book => {
  const existingBook = books.has(isbn);

  if (existingBook) {
    // @ts-expect-error Using js methods
    return books.get(isbn);
  }

  // Reuse constructor to avoid creating new object all the time
  const book = new Book(author, isbn, title);
  books.set(isbn, book);

  return book;
};

interface AddBookProperties {
  author: string;
  availability: boolean;
  isbn: string;
  sales: number;
  title: string;
}

const addBook = (properties: AddBookProperties): Book => {
  const book = {
    ...createBook(properties.author, properties.isbn, properties.title),
    availability: properties.availability,
    isbn: properties.isbn,
    sales: properties.sales,
  };

  bookList.push(book);
  return book;
};

addBook({
  author: 'JK Rowling',
  availability: false,
  isbn: 'AB123',
  sales: 100,
  title: 'Harry Potter',
});
addBook({
  author: 'JK Rowling',
  availability: true,
  isbn: 'AB123',
  sales: 50,
  title: 'Harry Potter',
});
addBook({
  author: 'Harper Lee',
  availability: true,
  isbn: 'CD345',
  sales: 10,
  title: 'To Kill a Mockingbird',
});
addBook({
  author: 'Harper Lee',
  availability: false,
  isbn: 'CD345',
  sales: 20,
  title: 'To Kill a Mockingbird',
});
addBook({
  author: 'F. Scott Fitzgerald',
  availability: false,
  isbn: 'EF567',
  sales: 20,
  title: 'The Great Gatsby',
});
console.info(bookList);
