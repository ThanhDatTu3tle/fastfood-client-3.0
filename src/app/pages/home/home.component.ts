import { Component, OnInit } from '@angular/core';

import { Product } from "../../../models/product.model";
import { Category } from "../../../models/category.model";
import { ProductService } from "./data-access/product/product.service";
import { CategoryService } from "./data-access/category/category.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title: string = "SPECIAL PROMOTION";
  news: string = "NEWS";

  category!: Category;
  products!: Product[];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe((category: Category): void => {
      this.category = category;
      const products = category.products;
      // console.log(products)
      this.products = products;
    });

    // this.productService.getAllProduct().subscribe((product: Product[]): void => {
    //   // console.log(product.find(x => x._id === '63d39947c0d43353a8636be4'))
    //   // this.product = product;
    // });
  }
}
