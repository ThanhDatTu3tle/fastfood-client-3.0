import { Component, OnInit } from '@angular/core';

// import { Product } from "./data-access/product/product.model";
import { Category } from "./data-access/category/category.model";
// import { ProductService } from "./data-access/product/product.service";
import { CategoryService } from "./data-access/category/category.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title: string = "SPECIAL PROMOTION";
  news: string = "NEWS";

  // category: undefined | Category[];
  // product: Product[] = [];

  constructor(
    // private productService: ProductService,
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
    // this.categoryService.getAll().subscribe((category: Category[]): void => {
    //   // console.log(category)
    //   this.category = category;
    // })
  }
}
