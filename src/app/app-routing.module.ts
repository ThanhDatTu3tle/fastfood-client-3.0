import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import {InfoUserComponent} from "./pages/info-user/info-user.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "account/info",
    component: InfoUserComponent,
  },
  {
    path: "product/:id",
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  //
  {
    path: "category/promotion",
    loadChildren: () => import('./pages/promotion/promotion.module').then(m => m.PromotionModule)
  },
  {
    path: "category/promotion/product/:id",
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  //
  {
    path: "category/chicken",
    loadChildren: () => import('./pages/chicken/chicken.module').then(m => m.ChickenModule)
  },
  {
    path: "category/chicken/product/:id",
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  //
  {
    path: "category/chicken-set",
    loadChildren: () => import('./pages/chicken-set/chicken-set.module').then(m => m.ChickenSetModule)
  },
  {
    path: "category/chicken-set/product/:id",
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  //
  {
    path: "category/burger",
    loadChildren: () => import('./pages/burger/burger.module').then(m => m.BurgerModule)
  },
  {
    path: "category/burger/product/:id",
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
