import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuListComponent} from "./layouts/components/menu-list/menu-list.component";
import {TitleComponent} from "./components/title/title.component";
import {ProductComponent} from "./components/product/product.component";
import {ButtonComponent} from "./components/button/button.component";
import {MenuItemComponent} from "./layouts/components/menu-list/menu-item/menu-item.component";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LoginFormComponent} from "./layouts/components/login-form/login-form.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    MenuListComponent,
    TitleComponent,
    ProductComponent,
    ButtonComponent,
    MenuItemComponent,
    LoginFormComponent
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
    ButtonComponent,
    MenuItemComponent,
    LoginFormComponent
  ]
})
export class SharedModule { }
