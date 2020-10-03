import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public books: Book[] = [];

  constructor() {}

  public addBook(book: Book): void {
    this.books = [...this.books, book];
  }

  public removeBook(id: string): void {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
