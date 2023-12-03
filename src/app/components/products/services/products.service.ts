import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = "https://dummyjson.com/products" ;

  constructor(
      private httpClient : HttpClient
  ) {}


  getProducts(take : number,skip : number =0) : Observable<Product[]> {
      const url = `${this.baseUrl}?skip=${skip}&limit=${take}`
      return this.httpClient.get<{products : Product[]}>(url).pipe(
          map((value)=>{
              return value.products;
          })
      )
  }
}
