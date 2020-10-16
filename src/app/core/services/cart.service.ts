import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public books: Book[] = [];

  constructor() {}

  public addBook(book: Book): void {
    const findBook = this.books.find((bookToLook) => bookToLook.id === book.id);

    if (findBook) {
      this.books = this.books.map<Book>((bookMap) => {
        return bookMap.id === findBook.id
          ? { ...bookMap, quantity: bookMap.quantity + 1 }
          : bookMap;
      });
    } else {
      this.books = [...this.books, { ...book, quantity: 1 }];
    }
  }

  public removeBook(id: string): void {
    const findBook = this.books.find((bookToLook) => bookToLook.id === id);

    if (findBook.quantity > 1) {
      this.books = this.books.map<Book>((bookMap) => {
        return bookMap.id === findBook.id
          ? { ...bookMap, quantity: bookMap.quantity - 1 }
          : bookMap;
      });
    } else {
      this.books = this.books.filter((book) => book.id !== id);
    }
  }
}
