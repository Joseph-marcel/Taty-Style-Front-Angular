import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductPage } from '../productPage';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  title = "Ajouter";
  productPage$:ProductPage;
  currentPage:number = 0;
  size:number = 4;
  

  constructor(private productService: ProductService,
              private router: Router){}

    ngOnInit(): void {
      this.getProducts(this.currentPage,this.size);
     
    }

    private getProducts(page1:number,size:number){
        this.productService.getProductList(this.currentPage,this.size).subscribe((data) => {
        this.productPage$ = data;
      });
    }

    updateProduct(pdtId: number) {
      this.router.navigate(['update-product', pdtId]);
    }

    consultProduct(pdtId: number) {
      this.router.navigate(['consult-product', pdtId]);
    }

    addProduct() {
      this.router.navigate(['add-product']);
    }

    gotoPage(page: number) {
      this.currentPage=page;
      this.getProducts(this.currentPage,this.size);
    }

    getPage(page: number) {
      this.currentPage=page;
      this.getProducts(this.currentPage,this.size);
    }

    
  }
    

