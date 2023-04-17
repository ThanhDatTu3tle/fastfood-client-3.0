import { Component, Input, OnInit } from '@angular/core';

import { Product } from "../../../models/product.model";
import { Category } from "../../../models/category.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  @Input() products: Product[] | undefined;

  contentBtn: string = "Add to cart";

  category!: Category;

  constructor() { }

  ngOnInit(): void {
  }
}
