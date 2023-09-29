import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { BillService } from 'src/app/services/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {

  newBill:any = {}
  customerEmpty?:boolean
  displayStyle = "none";
  total:number = 0
  customer:string = ''
  data:any = []
  filtered:any
  search:string | any
  counter = 1
  bill:any = []


  constructor(public productService: ProductsService, public billService: BillService, public router:Router) {
    this.bringProducts()
  }


  addToBill(item: any) {
    if(this.bill.includes(item)) {
      console.log("repetido")
      this.counter += 1
      item.amount = this.counter
    } else {
      this.bill.push(item)
    }

  }


  openPopup() {
    this.total = 0

    if(this.customer == '') {
      this.customerEmpty = true

    } else {
      this.customerEmpty = false

      this.bill.forEach((product: { productPrice: number}) => {
        this.total = this.total + (product.productPrice * 1)
        console.log(product)
      });
      this.displayStyle = "block";

    }
  }



  closePopup() {
    this.displayStyle = "none";
  }



  filterList() {
    this.filtered = []
    
    this.data.forEach((item:any) => {
      if(item.name.toLowerCase().includes(this.search)) {
        this.filtered.push(item)
      }
    });

    console.log(this.filtered)
  }


  cleanBill() {
    this.bill = []
  }

  createBill() {
    this.newBill.billCustomerName = this.customer
    this.newBill.billTotal = this.total
    this.newBill.billDate = new Date()

    this.billService.addBill(this.newBill).subscribe((res:any) => {
      this.router.navigate(['/facturas'])

    }, err => {
      this.router.navigate(['/facturas'])
    })
    
  }






  bringProducts() {
    this.productService.getProduct().subscribe((res:any) => {
      console.log(res)
      this.data = res
      this.filtered = this.data
    })

  }

}
