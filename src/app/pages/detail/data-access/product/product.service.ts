import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Product } from "../../../../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://odd-jade-adder-vest.cyclic.app/product';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<Product>  {
    return this.httpClient.get<Product>(`${this.apiUrl}/${id}`);
  }
}
