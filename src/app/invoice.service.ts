import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from './invoice/invoiceI';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl: String ="http://localhost:8083/institut/billing";

  constructor(private httpClient:HttpClient) { }

  getBillList(page:number,size:number):Observable<Invoice>{
    return this.httpClient.get<Invoice>(`${this.baseUrl}/billPage?page=${page}&size=${size}`);
  };

  
}
