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
  {
    path: "product/:id",
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: "category/promotion/product/:id",
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: "category/chicken/product/:id",
    loadChildren: () => import('./pages/detail/detail.module').then(m => m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
