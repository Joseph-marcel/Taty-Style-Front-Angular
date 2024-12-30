import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrl: './create-stock.component.css'
})
export class CreateStockComponent implements OnInit{


  title1="Creer";
  stockFormGroup:FormGroup;


  constructor(private fb:FormBuilder,private stockService:StockService,private router:Router){}


  ngOnInit(): void {
    this.stockFormGroup = this.fb.group({
      title:this.fb.control(''),
      dateExistant:this.fb.control('')
    });
  }


  goBack() {
    this.router.navigate(['stock']);
  }


  createStock() {
    let title:string = this.stockFormGroup.value.title;
    let dateExistant:Date = this.stockFormGroup.value.dateExistant;
    this.stockService.create(title,dateExistant).subscribe(data => { console.log(data)});
    this.goBack();
  }

}
