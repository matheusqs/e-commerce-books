import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../../core/models/book';
import { BooksService } from '../../core/services/books.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  public books: Book[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private bookService: BooksService) {
    this.subscriptions = [
      this.bookService.getAll().subscribe((books) => (this.books = books)),
    ];
  }

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
