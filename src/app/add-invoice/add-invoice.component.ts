import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.css'
})
export class AddInvoiceComponent implements OnInit{


  invoiceGroupForm:FormGroup;

  constructor(private fb:FormBuilder,private invoiceService:InvoiceService){}

  ngOnInit(): void {
    this.invoiceGroupForm = this.fb.group({
      customer:this.fb.group({
        firstName:this.fb.control(''),
        phoneNumber:this.fb.control(''),
      }),
      cost:this.fb.control(''),
      deposit:this.fb.control(''),
      refund:this.fb.control(''),
      billDate:this.fb.control(''),
      packDto: this.fb.group({
          allowances:this.fb.array([
              this.fb.group({
                name:this.fb.control(null,Validators.required),
                price:this.fb.control(null,Validators.required),
                size:this.fb.control(null,Validators.required),
                fashion:this.fb.control(null,Validators.required)
              }),
          ]),
        }),
    });
  }

  myFormArray() {
    return this.invoiceGroupForm.controls['packDto'].get('allowances') as FormArray;
  }

  createInvoice() {
    console.log(this.invoiceGroupForm);
  }

  deleteAllowance() {
    throw new Error('Method not implemented.');
  }

}
