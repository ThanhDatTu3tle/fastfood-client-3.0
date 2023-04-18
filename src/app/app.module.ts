import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgOptimizedImage } from "@angular/common";

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
import { MenuHighlightsComponent } from './pages/home/menu-highlights/menu-highlights.component';
import { TitleComponent } from './components/title/title.component';
import { ProductComponent } from './components/product/product.component';

import { CategoryService } from "./pages/home/data-access/category/category.service";
import { ProductService } from "./pages/home/data-access/product/product.service";
import { ButtonComponent } from './components/button/button.component';
import { BestSellerComponent } from './pages/home/menu-highlights/items/best-seller/best-seller.component';
import { OrderNowComponent } from './pages/home/menu-highlights/items/order-now/order-now.component';
import { BirthdayComponent } from './pages/home/menu-highlights/items/birthday/birthday.component';
import { StoreComponent } from './pages/home/menu-highlights/items/store/store.component';
import { HighlightsComponent } from './pages/home/menu-highlights/items/highlights/highlights.component';
import { MenuItemComponent } from './layouts/components/menu-list/menu-item/menu-item.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "./shared.module";
// import {MenuListComponent} from "./layouts/components/menu-list/menu-list.component";

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
    // MenuListComponent,
    // TitleComponent,
    // ProductComponent,
    // ButtonComponent,
    BestSellerComponent,
    OrderNowComponent,
    BirthdayComponent,
    StoreComponent,
    HighlightsComponent,
    // MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild([]),
    BrowserAnimationsModule,
    HttpClientModule,

    MatButtonModule,
    MatIconModule,
    NgOptimizedImage,
    SharedModule,
    // SharedModule,

  ],
  providers: [CategoryService, ProductService],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
