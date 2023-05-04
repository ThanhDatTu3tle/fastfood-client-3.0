import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";

import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

import {TitleComponent} from "./components/title/title.component";
import {ProductComponent} from "./components/product/product.component";
import {ButtonComponent} from "./components/button/button.component";
import {PopperComponent} from "./components/popper/popper.component";

import {MenuListComponent} from "./layouts/components/menu-list/menu-list.component";
import {MenuItemComponent} from "./layouts/components/menu-list/menu-item/menu-item.component";
import {LoginFormComponent} from "./layouts/components/login-form/login-form.component";
import {ExtraProductComponent} from "./components/extra-product/extra-product.component";
import {ExtraDessertDrinkComponent} from "./components/extra-dessert-drink/extra-dessert-drink.component";
import {ExtraDrinkComponent} from "./components/extra-drink/extra-drink.component";

@NgModule({
  declarations: [
    MenuListComponent,
    TitleComponent,
    ProductComponent,
    ExtraProductComponent,
    ExtraDessertDrinkComponent,
    ExtraDrinkComponent,
    ButtonComponent,
    MenuItemComponent,
    LoginFormComponent,
    PopperComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  exports: [
    MenuListComponent,
    TitleComponent,
    ProductComponent,
    ExtraProductComponent,
    ExtraDessertDrinkComponent,
    ExtraDrinkComponent,
    ButtonComponent,
    MenuItemComponent,
    LoginFormComponent,
    PopperComponent
  ]
})
export class SharedModule { }
