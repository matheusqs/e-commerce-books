import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public total = '';

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.total = this.formatCurrency(this.calculateTotalCart());
  }

  public formatCurrency(value: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  public handleRemoveBookClick(id: string): void {
    this.cartService.removeBook(id);
    this.total = this.formatCurrency(this.calculateTotalCart());
  }

  public handleAddBookClick(book: Book): void {
    this.cartService.addBook(book);
    this.total = this.formatCurrency(this.calculateTotalCart());
  }

  private calculateTotalCart(): number {
    return this.cartService.books.reduce<number>(
      (acc, current) => current.price * current.quantity + acc,
      0
    );
  }
}
