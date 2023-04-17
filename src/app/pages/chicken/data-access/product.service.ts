import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Category } from "../../../../models/category.model";

const apiUrl = 'https://odd-jade-adder-vest.cyclic.app/category/63d896109c55b5009153c26b';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceChicken {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProductChicken(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrl);
  }
}
