import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.bookPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.book.price);
  }

  handleAddCartClick(): void {
    this.cartService.addBook(this.book);
    this.toastr.success(`Adicionado ao carrinho com sucesso!`);
  }
}
