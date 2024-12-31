import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  standalone:false,
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit{


  title:string = "creer";

  title1:string = "creer";
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addInvoice() {
    throw new Error('Method not implemented.');
  }

}
