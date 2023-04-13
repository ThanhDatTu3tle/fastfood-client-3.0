import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from "./product.model";
import { Category } from '../category/category.model';

const apiUrl = 'https://odd-jade-adder-vest.cyclic.app/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(apiUrl);
  }
}
