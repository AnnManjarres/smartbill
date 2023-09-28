import { Component } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {

  data = [
    {"id": 1, "customer_name": "Juan Torres", "total": 340000, "date": "2023-05-04"},
    {"id": 2, "customer_name": "Juana Lopez", "total": 400000, "date": "2023-05-04"},
    {"id": 3, "customer_name": "Andres Castillo", "total": 340000, "date": "2023-07-21"},
    {"id": 4, "customer_name": "Claudia Martinez", "total": 1400000, "date": "2023-05-04"}
  ]
  filtered:any
  search:string | any

  constructor() {
    this.filtered = this.data
  }

  filterList() {
    this.filtered = []
    
    this.data.forEach(item => {
      if(item.customer_name.toLowerCase().includes(this.search)) {
        this.filtered.push(item)
      }
    });

    console.log(this.filtered)
  }

  createBill() {
    
  }

}
