import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Category } from "../../../../../models/category.model";

const apiUrlDessert = 'https://odd-jade-adder-vest.cyclic.app/category/63d8967c9c55b5009153c275';
const apiUrlSauceChicken = 'https://odd-jade-adder-vest.cyclic.app/category/64478993506aaeab28e7b628';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProductOfSauceChicken(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrlSauceChicken)
  }

  getAllProductOfDessert(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrlDessert)
  }
}
