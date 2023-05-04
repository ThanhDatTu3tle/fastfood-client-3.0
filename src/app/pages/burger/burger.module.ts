import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BurgerComponent } from "./burger.component";
import { BurgerRoutingModule } from "./burger-routing.module";
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [
    BurgerComponent,
  ],
  imports: [
    CommonModule,
    BurgerRoutingModule,
    SharedModule,
  ]
})
export class BurgerModule {

}
