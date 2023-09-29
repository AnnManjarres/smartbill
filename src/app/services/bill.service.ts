import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(public http: HttpClient) { }

  addBill(bill: any) {
    return this.http.post("http://localhost:8080/newBill", bill)
  }

  getBills() {
    return this.http.get("http://localhost:8080/bills")
  }

  dropBill(id: number) {
    return this.http.delete(`http://localhost:8080/deleteBill/${id}`)
  }
}
