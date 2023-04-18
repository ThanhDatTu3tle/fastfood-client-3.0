import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {ProductComponent} from "./product.component";
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProductModule {

}
