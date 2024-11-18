import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  product:Product = new Product();
  

  constructor(private productService:ProductService,private router:Router){}
   
  ngOnInit(): void {
    
  }

  onSubmit() {
    this.saveProduct();
    this.router.navigate(['products']);
  }

  saveProduct(){
    this.productService.saveProduct(this.product).subscribe( data =>{
      this.product = data;
    });
  }
}
