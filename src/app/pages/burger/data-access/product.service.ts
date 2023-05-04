import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Category } from "../../../../models/category.model";

const apiUrl = 'https://odd-jade-adder-vest.cyclic.app/category/63d896339c55b5009153c26f';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceBurger {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProductBurger(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrl);
  }
}
