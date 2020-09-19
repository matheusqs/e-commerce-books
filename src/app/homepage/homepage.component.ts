import { Component, OnInit } from '@angular/core';
import { Book } from '../core/models/book';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public books: Book[] = [
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
    { name: 'Rápido e devagar', isbn: '000000000000', price: 30 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
