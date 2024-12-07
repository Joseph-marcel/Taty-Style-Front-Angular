import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { StockPage } from '../stockPage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent implements OnInit{

  title="creer";
  reference:string;
  pdtId:number;
  stocks$:StockPage;
  currentPage:number = 0;
  size:number=5;
  pages:number[];

  constructor(private stockService:StockService,private router:Router){};

  ngOnInit(): void {
    this.getAllStocks(this.currentPage,this.size);
  }

  getAllStocks(page:number,size:number){
    this.stockService.getStocksList(this.currentPage,this.size).subscribe(data =>{
      this.stocks$ = data;
    });
  }

  getPage(page: number){
    this.currentPage=page;
    this.getAllStocks(this.currentPage,this.size);
  }


  debitStock(reference:string) {
    this.router.navigate(['debit-stock', reference]);
  }

  creditStock(reference:string) {
    this.router.navigate(['credit-stock', reference]);
  }

  getStockHistory(reference:string) {
    this.router.navigate(['get-stock-history', reference]);
  }

}
