import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptimizedImage } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";

import { OAuthModule } from "angular-oauth2-oidc";

import { RecaptchaModule } from 'ng-recaptcha';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { HeaderComponent } from './layouts/components/header/header.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { MenuTitlesComponent } from './layouts/components/header/menu-titles/menu-titles.component';
import { OptionsComponent } from './layouts/components/header/options/options.component';

import { InfoUserComponent } from "./pages/info-user/info-user.component";
import { InfoComponent } from "./pages/info-user/pages/info/info.component";
import { SocialComponent } from "./pages/info-user/pages/social/social.component";
import { NavTitlesComponent } from "./pages/info-user/nav-titles/nav-titles.component";

import { HomeComponent } from './pages/home/home.component';

import { MenuHighlightsComponent } from './pages/home/menu-highlights/menu-highlights.component';

import { CategoryService } from "./pages/home/data-access/category/category.service";
import { ProductService } from "./pages/home/data-access/product/product.service";

import { BestSellerComponent } from './pages/home/menu-highlights/items/best-seller/best-seller.component';
import { OrderNowComponent } from './pages/home/menu-highlights/items/order-now/order-now.component';
import { BirthdayComponent } from './pages/home/menu-highlights/items/birthday/birthday.component';
import { StoreComponent } from './pages/home/menu-highlights/items/store/store.component';
import { HighlightsComponent } from './pages/home/menu-highlights/items/highlights/highlights.component';

import { SharedModule } from "./shared.module";


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuTitlesComponent,
    OptionsComponent,
    MenuHighlightsComponent,
    BestSellerComponent,
    OrderNowComponent,
    BirthdayComponent,
    StoreComponent,
    HighlightsComponent,
    InfoUserComponent,
    InfoComponent,
    SocialComponent,
    NavTitlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild([]),
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    SharedModule,
    FormsModule,
    MatDialogModule,
    RecaptchaModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    CategoryService,
    ProductService,
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
