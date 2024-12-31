import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-debit-stock',
  standalone:false,
  templateUrl: './debit-stock.component.html',
  styleUrl: './debit-stock.component.css'
})
export class DebitStockComponent implements OnInit{

   reference:string;
    pdtId:number;
    title:string ="continuer";
    
  
    constructor(private router:Router,
                private stockService:StockService,
                private route:ActivatedRoute){}
  
    ngOnInit(): void {
       this.getStockReference();
    }
  
    getStockReference(){
        this.reference = this.route.snapshot.params['reference'];
        this.stockService.getProductInStockId(this.reference).subscribe((data: any) =>{ 
        this.pdtId = data;
      });
    }


    debitParams(reference:string,pdtId:number) {
      this.router.navigate(['debit-params',reference,pdtId]);
    }
  

}
