import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Category } from "../../../../../models/category.model";

const apiUrl = 'https://odd-jade-adder-vest.cyclic.app/category/63d133ab7abbc1799c72eeb4';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCategory(): Observable<Category> {
    return this.httpClient.get<Category>(apiUrl);
  }
}
