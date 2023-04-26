import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from "./data-access/product/product.service";
import {Category} from "../../../models/category.model";
import {Product} from "../../../models/product.model";
import {CategoryService} from "./data-access/category/category.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  titleSauceChicken: string = "Add more sauce for Fried Chicken"
  titleDessert: string = "Ngon hơn khi ăn kèm"
  contentBtn: string = "Add to cart";

  category!: Category;

  product!: Product;
  productSauceChickens!: Product[];
  productDesserts!: Product[];

  constructor(
    private route: ActivatedRoute,
    private detailService: ProductService,
    private categoryService: CategoryService,
  ) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.detailService.getProductById(id!).subscribe((product: Product): void => {
      this.product = product;
    });

    this.categoryService.getAllProductOfSauceChicken().subscribe((category: Category): void => {
      this.category = category;
      this.productSauceChickens = category.products;
    });

    this.categoryService.getAllProductOfDessert().subscribe((category: Category): void => {
      this.category = category;
      this.productDesserts = category.products;
    });
  }
}
