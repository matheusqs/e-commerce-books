import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { CreateBookComponent } from './pages/create-book/create-book.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'book',
    component: CreateBookComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
