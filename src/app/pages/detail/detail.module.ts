import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DetailComponent} from "./detail.component";
import {DetailRoutingModule} from "./detail-routing.module";
import {SharedModule} from "../../shared.module";

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule,
  ]
})
export class DetailModule { }
