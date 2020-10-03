import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [
    {
      id: uuidv4(),
      name: 'Rápido e devagar',
      isbn: '000000000000',
      price: 49.9,
      uri:
        'https://cache.skoob.com.br/local/images//N0Kf1UukgpxQuWYNTPcCM9QPPVs=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/686726/1b18210bb666e30e4702afd739e4e443B.jpg',
    },
    {
      id: uuidv4(),
      name: 'O Jeito Peter Lynch de Investir',
      isbn: '000000000000',
      price: 39.9,
      uri: 'https://m.media-amazon.com/images/I/41AicG3CZ1L.jpg',
    },
  ];

  public books$: BehaviorSubject<Book[]> = new BehaviorSubject(this.books);

  public post(book: Book): Book {
    this.books = [...this.books, { ...book, id: uuidv4() }];
    this.books$.next(this.books);
    return book;
  }

  public delete(id: string): void {
    this.books = this.books.filter((book) => book.id !== id);
    this.books$.next(this.books);
  }

  public patch(book: Book): void {
    this.books = this.books.map<Book>((bookParam) =>
      bookParam.id === book.id ? book : bookParam
    );
    this.books$.next(this.books);
  }

  public get(id: string): Book {
    return this.books.find((book) => book.id === id);
  }
}
