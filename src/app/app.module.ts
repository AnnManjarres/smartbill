import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/tools/sidebar/sidebar.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { BillsComponent } from './components/bills/bills.component';
import { SalesComponent } from './components/sales/sales.component';
import { AddProductModalComponent } from './components/tools/add-product-modal/add-product-modal.component';
import { EditProductModalComponent } from './components/tools/edit-product-modal/edit-product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    RegisterComponent,
    ProductsComponent,
    BillsComponent,
    SalesComponent,
    AddProductModalComponent,
    EditProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
