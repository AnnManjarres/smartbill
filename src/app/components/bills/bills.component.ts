import { Component } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {

  data:any= []
  displayStyle = "none"
  bill:any = {}
  search:string | any

  constructor(public billService: BillService) {
    this.bringBills()
    
  }

  bringBills() {
    this.billService.getBills().subscribe((res:any) => {
      this.data = res
      console.log(res)
    })

  }

  showPopup(item:any) {
    this.bill = item
    console.log("Hellloooooo")
    this.displayStyle = "block";

  }
  
  closePopup() {
    this.displayStyle = "none"
  }

  deleteBill() {
    this.billService.dropBill(this.bill.bullId).subscribe((res:any) => {
      window.location.href = "http://localhost:4200/facturas"
    })

  }

}
