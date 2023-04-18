import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChickenComponent } from "./chicken.component";
import { ChickenRoutingModule } from "./chicken-routing.module";
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [
    ChickenComponent,
  ],
  imports: [
    CommonModule,
    ChickenRoutingModule,
    SharedModule,
  ]
})
export class ChickenModule {

}
