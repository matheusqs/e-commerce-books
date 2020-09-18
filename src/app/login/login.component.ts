import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public handleLoginClick() {
    const { username, password } = this.loginForm.value;

    if (username === 'admin' && password === '123') {
      this.router.navigate(['/homepage']);
    } else {
      console.log('UNAUTHORIZED!');
    }
  }
}
