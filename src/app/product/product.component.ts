import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductPage } from '../productPage';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-product',
  standalone:false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  title = "Ajouter";
  title1 = "Rechercher";
  productPage$:ProductPage;
  currentPage:number = 0;
  size:number = 3;
  searchProductFormGroup: FormGroup;

  constructor(private productService: ProductService,
              private router: Router,
              private fb: FormBuilder){}


    ngOnInit(): void {
      this.getProducts(this.currentPage,this.size);
      this.searchProductFormGroup=this.fb.group({
        designation:this.fb.control('')
      });
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


    getPage(page: number) {
      this.currentPage=page;
      this.getProducts(this.currentPage,this.size);
    }


    handleSearchProduct() {
      let designation : string = this.searchProductFormGroup.value.designation;
      this.productService.searchProduct(designation,this.currentPage,this.size).subscribe( data => {
        this.productPage$ = data;
      });
    }

    
  }
    

