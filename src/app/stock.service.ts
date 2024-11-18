import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl:String = "http://localhost:8083/institut/stocks";

  constructor(private httpClient:HttpClient){}


}
