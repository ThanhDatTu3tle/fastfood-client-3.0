import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { ChickenComponent } from "./chicken.component";

const routes: Routes = [
  {
    path: '',
    component: ChickenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChickenRoutingModule { }
