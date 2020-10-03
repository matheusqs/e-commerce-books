import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public total = '';

  constructor(public cartService: CartService) {
    this.total = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.calculateTotalCart());
  }

  ngOnInit(): void {}

  private calculateTotalCart(): number {
    return this.cartService.books.reduce<number>(
      (acc, current) => current.price + acc,
      0
    );
  }
}
