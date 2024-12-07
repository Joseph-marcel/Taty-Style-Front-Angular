import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';



@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{

  title: "mise à jour";
  pdtId:number;
  product:Product = new Product();


  constructor(private productService:ProductService, private router:Router,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getProductById();
  }

  onSubmit() {
       this.productService.updateProduct(this.pdtId,this.product).subscribe(data => {
        this.product = data;
        this.router.navigate(['products']);
    });
  }

  getProductById(){
    this.pdtId = this.route.snapshot.params['pdtId'];
    this.productService.getProduct(this.pdtId).subscribe(data => {
    this.product = data;
    });
  }

}
