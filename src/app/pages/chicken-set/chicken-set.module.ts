import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChickenSetComponent } from "./chicken-set.component";
import { ChickenSetRoutingModule } from "./chicken-set-routing.module";
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [
    ChickenSetComponent,
  ],
  imports: [
    CommonModule,
    ChickenSetRoutingModule,
    SharedModule,
  ]
})
export class ChickenSetModule {

}
