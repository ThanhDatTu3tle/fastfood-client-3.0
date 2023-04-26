import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Product} from "../../../models/product.model";
import {Category} from "../../../models/category.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  @Input() products: Product[] | undefined;
  @Input() product: Product | undefined;

  contentBtn: string = "Add to cart";
  detailLink: string | undefined;

  category!: Category;

  constructor() { }

  ngOnInit(): void {
  }

  linkToDetail(id: string | undefined) {
    if (typeof id === "string") {
      localStorage.setItem('idProduct', id)
    }
    this.detailLink = `product/${id}`;

  }
}
