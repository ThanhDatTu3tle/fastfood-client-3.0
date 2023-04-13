import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuTitlesComponent } from './layouts/components/header/menu-titles/menu-titles.component';
import { OptionsComponent } from './layouts/components/header/options/options.component';
import { PromotionComponent } from './pages/promotion/promotion.component';
import { MenuHighlightsComponent } from './pages/home/menu-highlights/menu-highlights.component';
import { TitleComponent } from './components/title/title.component';
import { ProductComponent } from './components/product/product.component';

import {CategoryService} from "./pages/home/data-access/category/category.service";
import {ProductService} from "./pages/home/data-access/product/product.service";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuTitlesComponent,
    OptionsComponent,
    PromotionComponent,
    MenuHighlightsComponent,
    TitleComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatButtonModule,
    MatIconModule
  ],
  providers: [CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
