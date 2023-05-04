import {Component, OnInit} from '@angular/core';
import {Category} from "../../../models/category.model";
import {Product} from "../../../models/product.model";
import {ProductServiceBurger} from "./data-access/product.service";
@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  title: string = "BURGER";

  product!: Category;
  products!: Product[];

  constructor(
    private productService: ProductServiceBurger,
  ) {
  }

  ngOnInit() {
    this.productService.getAllProductBurger().subscribe((product: Category): void => {
      this.product = product;
      // console.log(products)
      this.products = product.products;
    });
  }
}
