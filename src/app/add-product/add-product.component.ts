import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Route, Router } from '@angular/router';
import { Product } from '../product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ProductI } from '../productI';





@Component({
  selector: 'app-add-product',
  standalone:false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{

  product:Product = new Product();


constructor(private productService:ProductService,private router:Router){}
   
ngOnInit(): void {}

onSubmit() {
  this.productService.saveProduct(this.product).subscribe( data => { this.product = data});
  this.router.navigate(['products']);
}

goBack() {
  this.router.navigate(['/products']);;
}

  
}
