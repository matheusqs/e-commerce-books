import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public loginForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public handleLoginClick(): void {
    const { username, password } = this.loginForm.value;

    if (username === 'admin' && password === '123') {
      this.toastr.success('Login realizado com sucesso!');

      this.authService.onLogin();

      this.router.navigate(['/homepage']);
    } else {
      this.toastr.error('Falha no Login', 'Usuário ou senha inválidos.');
    }
  }
}
