import { Component, Input, OnInit } from '@angular/core';

import { Product } from "../../pages/home/data-access/product/product.model";
import { Category } from "../../pages/home/data-access/category/category.model";
import { ProductService } from "../../pages/home/data-access/product/product.service";
import { CategoryService } from "../../pages/home/data-access/category/category.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  // @Input() category: Category[] | undefined;
  // @Input() product!: any;
  contentBtn: string = "Add to cart";

  category!: Category;
  products!: Product[];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe((category: Category): void => {

      this.category = category;
      const products = category.products;
      console.log(products)
      this.products = products;
    });

    this.productService.getAllProduct().subscribe((product: Product[]): void => {
      // console.log(product.find(x => x._id === '63d39947c0d43353a8636be4'))
      // this.product = product;
    });
  }
}
