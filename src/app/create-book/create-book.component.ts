import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit {
  createBook: FormGroup;

  constructor(fb: FormBuilder) {
    this.createBook = fb.group({});
  }

  ngOnInit(): void {}
}
