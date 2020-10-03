import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../../core/models/book';
import { BooksService } from '../../core/services/books.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit {
  createBook: FormGroup;

  constructor(fb: FormBuilder, private bookService: BooksService) {
    this.createBook = fb.group({
      name: '',
      price: 0,
      isbn: '',
      uri: '',
    });
  }

  ngOnInit(): void {}

  public handleCreateBookButton(): void {
    const book: Book = this.createBook.value;
    this.bookService.post(book);
  }
}
