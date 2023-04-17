import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionComponent } from "./pages/promotion/promotion.component";
import { HomeComponent } from "./pages/home/home.component";
import {ChickenComponent} from "./pages/chicken/chicken.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },

  {
    path: "category/promotion",
    component: PromotionComponent,
  },
  {
    path: "category/chicken",
    component: ChickenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
