import {Component, OnInit} from '@angular/core';
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
  titleDrink: string = "Chọn nước"
  titleBurger: string = "Add more"
  contentBtn: string = "Add to cart";

  check!: boolean;
  checkDD!: boolean;
  checkBG!: boolean;
  category!: Category;
  product!: Product;
  products!: Product[];
  productSauceChickens!: Product[];
  productBurgerExtra!: Product[];
  productDesserts!: Product[];
  productDrinks!: Product[];

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

    this.categoryService.getPromotionCategory().subscribe((category: Category): void => {
      this.category = category;
      this.products = category.products;
      const idCheck = localStorage.getItem('idProduct')
      category.products.map(x => x._id).map((item) => {
        if (idCheck === item) {
          this.check = true;
        }
      })
    })
    this.categoryService.getChickensetCategory().subscribe((category: Category): void => {
      this.category = category;
      this.products = category.products;
      const idCheck = localStorage.getItem('idProduct')
      category.products.map(x => x._id).map((item) => {
        if (idCheck === item) {
          this.checkDD = true;
        }
      })
    })
    this.categoryService.getBurgerCategory().subscribe((category: Category) : void => {
      this.category = category;
      this.products = category.products;
      const idCheck = localStorage.getItem('idProduct')
      category.products.map(x => x._id).map((item) => {
        if (idCheck === item) {
          this.checkBG = true;
        }
      })
    })

    this.categoryService.getAllProductOfSauceChicken().subscribe((category: Category): void => {
      this.category = category;
      this.productSauceChickens = category.products;
    });
    this.categoryService.getAllProductOfDessert().subscribe((category: Category): void => {
      this.category = category;
      this.productDesserts = category.products;
    });
    this.categoryService.getAllProductOfDrink().subscribe((category: Category): void => {
      this.category = category;
      this.productDrinks = category.products;
    });

    this.categoryService.getAllProductOfBurgerExtra().subscribe((category: Category) : void => {
      this.category = category;
      this.productBurgerExtra = category.products;
    });
  }
}
