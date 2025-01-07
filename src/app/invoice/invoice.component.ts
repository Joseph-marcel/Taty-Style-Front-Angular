import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from './invoiceI';
import { InvoiceService } from '../invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  standalone:false,
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit{


  title:string = "creer";
  title1:string = "creer";
  currentPage:number = 0;
  size:number = 2;
  invoiceList$:Invoice;

  constructor(private invoiceService:InvoiceService,private router:Router){}
  

  ngOnInit(): void {
    this.getListInvoices(this.currentPage,this.size);
  }

  addInvoice() {
    this.router.navigate(['add-invoice']);
  }

  editInvoice(billId: string) {
    this.router.navigate(['edit-invoice',billId]);
  }

  getListInvoices(page:number,size:number){
    this.invoiceService.getBillList(page,size).subscribe((data) => {
    this.invoiceList$ = data;
    });
  }

  getPage(page: number) {
    this.currentPage = page;
    this.getListInvoices(this.currentPage,this.size);
  }

}
