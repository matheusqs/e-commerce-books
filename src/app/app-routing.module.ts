import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { CartComponent } from './pages/cart/cart.component';
import { CreateBookComponent } from './pages/create-book/create-book.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchBooksComponent } from './pages/search-books/search-books.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthService],
  },
  {
    path: 'book',
    component: CreateBookComponent,
    canActivate: [AuthService],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthService],
  },
  {
    path: 'search',
    component: SearchBooksComponent,
    canActivate: [AuthService],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
