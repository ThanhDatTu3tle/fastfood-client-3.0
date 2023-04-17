import { Component, OnInit } from '@angular/core';

import { ProductService } from "./data-access/product.service";
import { Category } from "../../../models/category.model";
import { Product } from "../../../models/product.model";

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  title: string = "PROMOTION";

  product!: Category;
  products!: Product[];

  constructor(
    private productService: ProductService,
  ) {
  }
  ngOnInit(): void {
    this.productService.getAllProductPromotion().subscribe((product: Category): void => {
      this.product = product;
      const products = product.products;
      // console.log(products)
      this.products = products;
    });
  }
}
