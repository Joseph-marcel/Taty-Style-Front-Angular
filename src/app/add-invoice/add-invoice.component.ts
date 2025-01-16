import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../invoice.service';
declare let $:any;

@Component({
  selector: 'app-add-invoice',
  standalone:false,
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.css'
})
export class AddInvoiceComponent implements OnInit{


  invoiceGroupForm:FormGroup;
  index: number;
  frmgrp: FormGroup;
  

  constructor(private fb:FormBuilder,private invoiceService:InvoiceService){}

  ngOnInit(): void {
    this.invoiceGroupForm = this.fb.group({
      customer:this.fb.group({
        firstName:this.fb.control('',[Validators.required]),
        phoneNumber:this.fb.control(''),
      }),
      billDate:this.fb.control('',[Validators.required]),
      deposit:this.fb.control('',[Validators.required]),
      cost:this.fb.control('',[Validators.required]),
      packDto: this.fb.group({
          allowances:this.fb.array([
              
          ]),
        }),
    });
  }

  myFormArray() {
    return this.invoiceGroupForm.controls['packDto'].get('allowances') as FormArray;
  }


  createInvoice() {
    console.log(this.invoiceGroupForm)
  }


  deleteAllowance(index:number) {
    const frmArray = <FormArray>this.invoiceGroupForm.controls['packDto'].get('allowances');
          frmArray.removeAt(index);
  }

  addAllowance() {
      this.frmgrp = this.fb.group({
      name:this.fb.control(null,[Validators.required]),
      price:this.fb.control(null,[Validators.required]),
      size:this.fb.control(null),
      fashion:this.fb.control(null)
    });

    (<FormArray>this.invoiceGroupForm.controls['packDto'].get('allowances')).push(this.frmgrp);
  }


  amount() {
    let sum = 0;
    const arrayControl = this.invoiceGroupForm.controls['packDto'].get('allowances') as FormArray;

    const form = (<FormArray>this.invoiceGroupForm.controls['packDto'].get('allowances')).length;
    for(let i = 0; i < form; i++){
      sum = sum + arrayControl.controls[i].get('price')?.value;
    }
        this.invoiceGroupForm.get('cost')?.setValue(sum);
  }


  ngAfterViewInit(){}

  

}
