import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../stock.service';
import { OperationType } from '../operation-type';
import { StockOperation } from '../stock-operation';

@Component({
  selector: 'app-debit-params',
  standalone:false,
  templateUrl: './debit-params.component.html',
  styleUrl: './debit-params.component.css'
})
export class DebitParamsComponent implements OnInit{

  reference:string;
    pdtId:number;
    stockOperation:StockOperation = new StockOperation();
  
  
    constructor(private route:ActivatedRoute,private stockService:StockService,private router:Router){}
  
    ngOnInit(): void {
      this.getdebitParams();
      this.stockOperation.type = OperationType[OperationType.DEBIT];
    }
  
    getdebitParams(){
      this.reference = this.route.snapshot.params['reference'];
      this.pdtId = this.route.snapshot.params['pdtId'];
    }
  
    onSubmitDebit() {
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
