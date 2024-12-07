import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockOperation } from './stock-operation';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private baseUrl:String ="http://localhost:8083/institut/stocks";

  constructor(private httpClient:HttpClient,private productService:ProductService) { }

  creditStockOperation(stockOperation:StockOperation,reference:String,pdtId:number):void{
     this.httpClient.post(`${this.baseUrl}/operation/${reference}/${pdtId}`,stockOperation);
  }

  debitStockOperation(stockOperation:StockOperation,reference:String,pdtId:number):void{
     this.httpClient.post(`${this.baseUrl}/operation/${reference}/${pdtId}`,stockOperation);
  }

  updateCreditStockOperation(operationNumber:number,reference:String,pdtId:number):void{
     this.httpClient.post(`${this.baseUrl}/operations/credit/correction/${operationNumber}/${reference}/${pdtId}`,null);
  }

}
