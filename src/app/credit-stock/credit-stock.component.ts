import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';


@Component({
  selector: 'app-credit-stock',
  templateUrl: './credit-stock.component.html',
  styleUrl: './credit-stock.component.css'
})
export class CreditStockComponent implements OnInit{

  reference:string;
  pdtId:number;

  constructor(private router:Router,private stockService:StockService,private route:ActivatedRoute){}

  ngOnInit(): void {
     this.getStockReference();
  }

  getStockReference(){
      this.reference = this.route.snapshot.params['reference'];
      this.stockService.getProductInStockId(this.reference).subscribe((data: any) =>{ 
      this.pdtId = data;
    });
  }

  creditParams(reference:string,pdtId:number){
    this.router.navigate(['credit-params',reference,pdtId]);
  }

}
