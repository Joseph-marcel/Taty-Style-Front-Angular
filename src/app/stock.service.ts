import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StockDto, StockPage } from './stockPage';
import { OperationService } from './operation.service';
import { StockI } from './stockI';
import { ProductService } from './product.service';
import { Product } from './productPage';
import { StockOperation } from './stock-operation';





@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl:String = "http://localhost:8083/institut/stocks";
  private baseUrl1:String = "http://localhost:8083/institut/products";

  constructor(private httpClient:HttpClient,private stockOperationService:OperationService,private productService:ProductService){}
  
  getStocksList(page:number,size:number):Observable<StockPage>{
    return this.httpClient.get<StockPage>(`${this.baseUrl}?page=${page}&size=${size}`);
  }

  createStock(stock:StockDto):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}`,stock);
  }

  saveOperation(reference:string,pdtId:number,stockOperation:StockOperation):void{
      this.httpClient.post(`${this.baseUrl}/operation/${reference}/${pdtId}`,stockOperation);
  }

  getStockHistory(reference:string,currentPage:number,pageSize:number):Observable<StockI>{
    return this.httpClient.get<StockI>(`${this.baseUrl}/${reference}/pageOperations?page=${currentPage}&size=${pageSize}`);
  }

  getProductInStockId(reference:string):any{
    return this.httpClient.get(`${this.baseUrl}/${reference}/product/id`);
  }

  getProduct(pdtId:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl1}/${pdtId}`);
  }

  creditStockOperation(reference:string,pdtId:number,stockOperation:StockOperation):void{
    this.httpClient.post(`${this.baseUrl}/operation/${reference}/${pdtId}`,stockOperation);
  }

}
