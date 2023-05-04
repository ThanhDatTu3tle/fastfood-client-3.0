import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product.model";
import {Category} from "../../../models/category.model";

@Component({
  selector: 'app-extra-drink',
  templateUrl: './extra-drink.component.html',
  styleUrls: ['./extra-drink.component.scss']
})
export class ExtraDrinkComponent implements OnInit {
  @Input() content: string | undefined;
  @Input() productDrinks: Product[] | undefined;
  @Input() product: Product | undefined;

  category!: Category;
  constructor() {
  }

  ngOnInit() {
  }
}
