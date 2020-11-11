import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StoreModule } from '@ngrx/store';
import * as fromSidenav from './core/store/sidenav/sidenav.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MenuButtonComponent } from './shared/menu-button/menu-button.component';
import { BookCardComponent } from './shared/book-card/book-card.component';
import { CreateBookComponent } from './pages/create-book/create-book.component';
import { CartComponent } from './pages/cart/cart.component';
import * as fromCart from './core/store/cart/cart.reducer';
import { SearchBooksComponent } from './pages/search-books/search-books.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    NavbarComponent,
    MenuButtonComponent,
    BookCardComponent,
    CreateBookComponent,
    CartComponent,
    SearchBooksComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      sidenav: fromSidenav.reducer,
      cart: fromCart.reducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [FormBuilder, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
