import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { ProductI } from '../productI';


@Component({
  selector: 'app-consult-product',
  templateUrl: './consult-product.component.html',
  styleUrl: './consult-product.component.css'
})
export class ConsultProductComponent implements OnInit{
   
  pdtId:number;
  currentPage:number = 0;
  size:number = 2;
  product$:ProductI;
  pages:number[];

  constructor(private productService:ProductService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.productHistory();
  }
  productHistory(){
     this.pdtId = this.route.snapshot.params['pdtId'];
     this.productService.consult(this.pdtId,this.currentPage,this.size).subscribe(data => {
     this.product$ = data;
     this.pages = [this.product$.totalPages];
    });
  }

  gotoPage(page: number) {
    this.currentPage=page;
    this.productHistory();
  }
  
}