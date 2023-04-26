import {Component, Input, OnInit} from '@angular/core';

import {Product} from "../../../models/product.model";
import {Category} from "../../../models/category.model";

@Component({
  selector: 'app-extra-product',
  templateUrl: './extra-product.component.html',
  styleUrls: ['./extra-product.component.scss']
})
export class ExtraProductComponent implements OnInit {
  @Input() content: string | undefined;
  @Input() products: Product[] | undefined;
  @Input() product: Product | undefined;

  category!: Category;
  constructor() {
  }

  ngOnInit(): void {
  }
}
