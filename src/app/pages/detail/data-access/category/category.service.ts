import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Category } from "../../../../../models/category.model";

const apiUrlPromotion = 'https://odd-jade-adder-vest.cyclic.app/category/63d133ab7abbc1799c72eeb4';
const apiUrlChickenset = 'https://odd-jade-adder-vest.cyclic.app/category/63d896239c55b5009153c26d';
const apiUrlBurger = 'https://odd-jade-adder-vest.cyclic.app/category/63d896339c55b5009153c26f';

const apiUrlBurgerExtra = 'https://odd-jade-adder-vest.cyclic.app/category/6447929a6728ed42379133b6';
const apiUrlSauceChicken = 'https://odd-jade-adder-vest.cyclic.app/category/64478993506aaeab28e7b628';
const apiUrlDessert = 'https://odd-jade-adder-vest.cyclic.app/category/63d8967c9c55b5009153c275';
const apiUrlDrink = 'https://odd-jade-adder-vest.cyclic.app/category/63d8969d9c55b5009153c279';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPromotionCategory(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrlPromotion);
  }
  getChickensetCategory(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrlChickenset);
  }
  getBurgerCategory(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrlBurger)
  }

  getAllProductOfSauceChicken(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrlSauceChicken)
  }
  getAllProductOfBurgerExtra(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrlBurgerExtra)
  }
  getAllProductOfDessert(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrlDessert)
  }
  getAllProductOfDrink(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrlDrink)
  }
}
