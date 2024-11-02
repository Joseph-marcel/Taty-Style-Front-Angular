import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL: String = "http://localhost:8083/institut/products";

  constructor(private httpClient:HttpClient){}

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  consult(pdtId:number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${pdtId}`);
  }
}
