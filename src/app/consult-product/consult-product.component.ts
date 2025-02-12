import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductI } from '../productI';


@Component({
  selector: 'app-consult-product',
  standalone:false,
  templateUrl: './consult-product.component.html',
  styleUrl: './consult-product.component.css'
})
export class ConsultProductComponent implements OnInit{
   
  pdtId:number;
  currentPage:number = 0;
  product$:ProductI;
  size:number=2;



  constructor(private productService:ProductService, private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.productHistory();
  }
  productHistory(){
     this.pdtId = this.route.snapshot.params['pdtId'];
     this.productService.consult(this.pdtId,this.currentPage,this.size).subscribe(data => { 
     this.product$ = data;
    });
  }

  getPage(page: number) {
    this.currentPage=page;
    this.productHistory();
  }


  goBack() {
    this.router.navigate(['/products']);
  }
  
}
