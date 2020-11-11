import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public post(book: Book): Observable<Book> {
    const uri = `${environment.baseUrl}/books`;

    return this.http.post<Book>(uri, book);
  }

  public delete(id: string): Observable<void> {
    const uri = `${environment.baseUrl}/books/${id}`;

    return this.http.delete<void>(uri);
  }

  public patch(book: Book): Observable<Book> {
    const uri = `${environment.baseUrl}/books/${book.id}`;

    return this.http.patch<Book>(uri, book);
  }

  public get(id: string): Observable<Book> {
    const uri = `${environment.baseUrl}/books/${id}`;

    return this.http.get<Book>(uri);
  }

  public getAll(): Observable<Book[]> {
    const uri = `${environment.baseUrl}/books`;

    return this.http.get<Book[]>(uri);
  }
}
