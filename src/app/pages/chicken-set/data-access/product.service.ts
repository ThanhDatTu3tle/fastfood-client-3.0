import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Category } from "../../../../models/category.model";

const apiUrl = 'https://odd-jade-adder-vest.cyclic.app/category/63d896239c55b5009153c26d';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceChickenSet {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProductChickenSet(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrl);
  }
}
