import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuListComponent} from "./layouts/components/menu-list/menu-list.component";
import {TitleComponent} from "./components/title/title.component";
import {ProductComponent} from "./components/product/product.component";
import {ButtonComponent} from "./components/button/button.component";
import {MenuItemComponent} from "./layouts/components/menu-list/menu-item/menu-item.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  declarations: [
    MenuListComponent,
    TitleComponent,
    ProductComponent,
    ButtonComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    MenuListComponent,
    TitleComponent,
    ProductComponent,
    ButtonComponent,
    MenuItemComponent
  ]
})
export class SharedModule { }
