import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { BurgerComponent } from "./burger.component";

const routes: Routes = [
  {
    path: '',
    component: BurgerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BurgerRoutingModule { }
