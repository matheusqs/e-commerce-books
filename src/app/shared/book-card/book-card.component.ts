import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input()
  public book: Book;
  public bookPrice = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.bookPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.book.price);
  }

  handleAddCartClick(): void {
    this.cartService.addBook(this.book);
  }
}
