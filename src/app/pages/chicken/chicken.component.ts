import {Component, OnInit} from '@angular/core';

import { ProductServiceChicken } from "./data-access/product.service";
import { Category } from "../../../models/category.model";
import { Product } from "../../../models/product.model";

@Component({
  selector: 'app-chicken',
  templateUrl: './chicken.component.html',
  styleUrls: ['./chicken.component.scss']
})
export class ChickenComponent implements OnInit {
  title: string = "CHICKEN";

  product!: Category;
  products!: Product[];

  constructor(
    private productService: ProductServiceChicken,
  ) {
  }

  ngOnInit() {
    this.productService.getAllProductChicken().subscribe((product: Category): void => {
      this.product = product;
      const products = product.products;
      // console.log(products)
      this.products = products;
    });
  }
}
