import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductI } from './productI';
import { ProductPage } from './productPage';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL: String = "http://localhost:8083/institut/products";

  constructor(private httpClient:HttpClient){}

  getProductList(page1:number,size:number): Observable<ProductPage>{
    return this.httpClient.get<ProductPage>(`${this.baseURL}?page=${page1}&size=${size}`);
  }

  consult(pdtId:number,page:number,size:number): Observable<ProductI>{
    return this.httpClient.get<ProductI>(`${this.baseURL}/benefit/${pdtId}?page=${page}&size=${size}`);
  }

  saveProduct(product:Product):Observable<any>{
    return this.httpClient.post(`${this.baseURL}`,product);
  }

  getProduct(pdtId:number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseURL}/${pdtId}`);
  }

  updateProduct(pdtId:number,product:Product): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${pdtId}`,product);
  }

  searchProduct(designation:string,page:number,size:number):Observable<ProductPage>{
    return  this.httpClient.get<ProductPage>(`${this.baseURL}/search?designation=${designation}&page=${page}&size=${size}`);
  }
}
