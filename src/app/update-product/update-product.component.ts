import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{

  title: "mise à jour";
  pdtId:number;
  product:any;

  constructor(private productService:ProductService, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getProductById();
  }

  onSubmit() {
    this.productService.updateProduct(this.pdtId,this.product).subscribe(data => {
    this.product = data;  
    this.route.component
    });
  }

  getProductById(){
    this.pdtId = this.route.snapshot.params['pdtId'];
    this.productService.getProduct(this.pdtId).subscribe(data => {
    this.product = data;
    });
  }

}
