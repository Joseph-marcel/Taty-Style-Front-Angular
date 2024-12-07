import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductI, StockOperationDto } from '../productI';


@Component({
  selector: 'app-consult-product',
  templateUrl: './consult-product.component.html',
  styleUrl: './consult-product.component.css'
})
export class ConsultProductComponent implements OnInit{
   
  pdtId:number;
  totalLength:any;
  page:number = 1;
  product$:ProductI;
  size:number=2;
  stockOperations:any[];


  constructor(private productService:ProductService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.productHistory();
  }
  productHistory(){
     this.pdtId = this.route.snapshot.params['pdtId'];
     this.productService.consult(this.pdtId,this.page,this.size).subscribe(data => {
     this.product$ = data;
     this.stockOperations =[this.product$?.stockOperationDtos];
     this.totalLength = this.stockOperations.length;
    });
  }

  
  
}
