import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import { ChickenSetComponent } from "./chicken-set.component";

const routes: Routes = [
  {
    path: '',
    component: ChickenSetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChickenSetRoutingModule { }
