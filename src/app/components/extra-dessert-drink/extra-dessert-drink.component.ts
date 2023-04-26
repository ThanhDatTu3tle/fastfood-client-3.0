import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {Category} from "../../../models/category.model";

@Component({
  selector: 'app-extra-dessert-drink',
  templateUrl: './extra-dessert-drink.component.html',
  styleUrls: ['./extra-dessert-drink.component.scss']
})
export class ExtraDessertDrinkComponent implements OnInit {
  @Input() content: string | undefined;
  @Input() productDesserts: Product[] | undefined;
  @Input() product: Product | undefined;

  category!: Category;
  constructor() {
  }

  ngOnInit() {
  }
}
