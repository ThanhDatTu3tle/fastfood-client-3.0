import {Component, OnInit} from '@angular/core';

import {Category} from "../../../models/category.model";
import {Product} from "../../../models/product.model";
import {ProductServiceChickenSet} from "../chicken-set/data-access/product.service";

@Component({
  selector: 'app-chicken-set',
  templateUrl: './chicken-set.component.html',
  styleUrls: ['./chicken-set.component.scss']
})
export class ChickenSetComponent implements OnInit {
  title: string = "CHICKEN SET";

  product!: Category;
  products!: Product[];

  constructor(
    private productService: ProductServiceChickenSet,
  ) {
  }

  ngOnInit() {
    this.productService.getAllProductChickenSet().subscribe((product: Category): void => {
      this.product = product;
      // console.log(products)
      this.products = product.products;
    });
  }
}
