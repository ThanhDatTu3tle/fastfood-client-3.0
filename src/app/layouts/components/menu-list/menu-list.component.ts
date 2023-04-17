import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent {
  bestseller: string = "Bestseller";
  promotion: string = "Promotion";
  chicken: string = "Chicken";
  chickenset: string = "Chicken Set";
  burger: string = "Burger";
  combo: string = "Combo";
  riceandspaghetti: string = "Rice & Spaghetti";
  dessert: string = "Dessert";
  pack: string = "Pack";
  drinks: string = "Drinks";

  bestsellerLink: string = "/category/bestseller";
  promotionLink: string = "/category/promotion";
  chickenLink: string = "/category/chicken";
  chickensetLink: string = "/category/chickenset";
  burgerLink: string = "/category/burger";
  comboLink: string = "/category/combo";
  riceandspaghettiLink: string = "/category/riceandspaghetti";
  dessertLink: string = "/category/dessert";
  packLink: string = "/category/pack";
  drinksLink: string = "/category/drinks";

  bestsellerImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/Pack-534x374px-07.jpg";
  promotionImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/Promotion-01_2.jpg";
  chickenImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/BG-Menu-Chicken-01-01_2.jpg";
  chickensetImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/Promotion-03_1.jpg";
  burgerImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/BG_New-02_4.jpg";
  comboImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/BG_New-09_2.jpg";
  riceandspaghettiImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/BG_New-10_1.jpg";
  dessertImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/BG-Menu-09_2.jpg";
  packImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/BG_New-05_1.jpg";
  drinksImage: string = "https://www.lotteria.vn/media/catalog/tmp/category/Promotion-10_2.jpg";
}
