import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { StockOperation } from '../stock-operation';

@Component({
  selector: 'app-credit-params',
  templateUrl: './credit-params.component.html',
  styleUrl: './credit-params.component.css'
})
export class CreditParamsComponent implements OnInit{

  reference:string;
  pdtId:number;
  stockOperation:StockOperation;

  constructor(private route:ActivatedRoute,private stockService:StockService){}

  ngOnInit(): void {
    this.getcreditParams();
  }

  getcreditParams(){
    this.reference = this.route.snapshot.params['reference'];
    this.pdtId = this.route.snapshot.params['pdtId'];
  }

  onSubmit(reference:string,pdtId: number) {
    this.saveOperation(this.reference,this.pdtId,this.stockOperation);
  }

  saveOperation(reference:string,pdtId:number,stockOperation:StockOperation){
     console.log(this.stockOperation);
  }
  

}
