import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductStatus } from '../product-status';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  title = "liste des produits";
  products:Product[];
  product: Product;


  

  constructor(private productService: ProductService){}

    ngOnInit(): void {
      this.getProducts();
      this.consultProduct(this.product.pdtId);
    }

    private getProducts(){
        this.productService.getProductList().subscribe((data) => {
          this.products = data;
          console.log(data);
        });
    }


    consultProduct(pdtId: number) {
      this.productService.consult(pdtId).subscribe((data) =>{
        this.product = data;
        console.log(data);
      });
   
    }
  }
    

