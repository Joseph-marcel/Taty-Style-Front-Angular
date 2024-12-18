import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StockI } from '../stockI';

@Component({
  selector: 'app-get-stock-history',
  templateUrl: './get-stock-history.component.html',
  styleUrl: './get-stock-history.component.css'
})
export class GetStockHistoryComponent implements OnInit{


  reference:string;
  currentPage:number = 0;
  pageSize:number = 3;
  stockI$:StockI;
  pages:number[];


  constructor(private stockService:StockService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(){
    this.reference = this.route.snapshot.params['reference'];
    this.stockService.getStockHistory(this.reference,this.currentPage,this.pageSize).subscribe(data  => {
      this.stockI$ = data;
      console.log(data);
      this.pages = [this.stockI$.totalPages];
    });
  }

  gotoPage(page: number) {
    this.currentPage=page;
    this.getHistory();
  }

  goBack() {
    this.router.navigate(['/stock']);
  }

}
