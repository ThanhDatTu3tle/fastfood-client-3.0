import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "category/promotion",
    loadChildren: () => import('./pages/promotion/promotion.module').then(m => m.PromotionModule)
  },
  {
    path: "category/chicken",
    loadChildren: () => import('./pages/chicken/chicken.module').then(m => m.ChickenModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
