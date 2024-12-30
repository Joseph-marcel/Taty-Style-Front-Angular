import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { StockOperation } from '../stock-operation';
import { OperationType } from '../operation-type';

@Component({
  selector: 'app-credit-params',
  templateUrl: './credit-params.component.html',
  styleUrl: './credit-params.component.css'
})
export class CreditParamsComponent implements OnInit{

  reference:string;
  pdtId:number;
  stockOperation:StockOperation = new StockOperation();


  constructor(private route:ActivatedRoute,private stockService:StockService,private router:Router){}

  ngOnInit(): void {
    this.getcreditParams();
    this.stockOperation.type = OperationType[OperationType.CREDIT];
  }

  getcreditParams(){
    this.reference = this.route.snapshot.params['reference'];
    this.pdtId = this.route.snapshot.params['pdtId'];
  }

  onSubmit() {
    this.saveOperation(this.reference,this.pdtId,this.stockOperation);
    this.router.navigate(['stock']);
  }

  saveOperation(reference:string,pdtId:number,stockOperation:StockOperation){
    this.stockService.saveStockOperation(reference,pdtId,this.stockOperation).subscribe({
      next:(data : any) => {
        data;
      },
      error:(err:any) => {
        console.log(err);
      }
    });
  }
  

}
