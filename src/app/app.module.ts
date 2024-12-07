import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { ConsultProductComponent } from './consult-product/consult-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreditStockComponent } from './credit-stock/credit-stock.component';
import { DebitStockComponent } from './debit-stock/debit-stock.component';
import { GetStockHistoryComponent } from './get-stock-history/get-stock-history.component';
import { CreditParamsComponent } from './credit-params/credit-params.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DatePipe } from '@angular/common';



const appRoutes : Routes = [
  {path :'home', component: HomeComponent},
  {path:'products', component:ProductComponent},
  {path :'stock', component: StockComponent},
  {path :'invoice', component: InvoiceComponent},
  {path :'update-product/:pdtId', component: UpdateProductComponent},
  {path :'add-product', component: AddProductComponent},
  {path :'consult-product/:pdtId', component: ConsultProductComponent},
  {path :'credit-stock/:reference', component: CreditStockComponent},
  {path :'debit-stock/:reference', component: DebitStockComponent},
  {path :'get-stock-history/:reference', component: GetStockHistoryComponent},
  {path :'credit-params/:reference/:pdtId', component: CreditParamsComponent},
  {path :'products', redirectTo:'/products', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    StockComponent,
    InvoiceComponent,
    ConsultProductComponent,
    UpdateProductComponent,
    AddProductComponent,
    CreditStockComponent,
    DebitStockComponent,
    GetStockHistoryComponent,
    CreditParamsComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    provideHttpClient(),
    ProductService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


