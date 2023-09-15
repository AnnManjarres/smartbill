import { Component } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {

  displayStyle = "none";
  total:number = 0
  customer?:string
  data = [
    {"id": 1, img: "/assets/img/agregar-producto.png", name: 'Agua', price: 30000, amount: 1},
    {"id": 2, img: "/assets/img/agregar-producto.png", name: 'Redbull', price: 40000, amount: 1},
    {"id": 3, img: "/assets/img/agregar-producto.png", name: 'Coca cola', price: 50000,amount: 1},
    {"id": 4, img: "/assets/img/agregar-producto.png", name: 'Jugo hit', price: 23000, amount: 1},
    {"id": 5, img: "/assets/img/agregar-producto.png", name: 'Galletas', price: 73000, amount: 1},
    {"id": 6, img: "/assets/img/agregar-producto.png", name: 'Pan', price: 30000, amount: 1}

  ]
  filtered:any
  search:string | any
  public bill:any = []


  constructor() {
    this.filtered = this.data
  }


  addToBill(item: any) {
    if(this.bill.includes(item)) {
      console.log("repetido")
      item.amount += 1
    } else {
      this.bill.push(item)
    }

  }


  openPopup() {
    this.bill.forEach((product: { price: number; amount: number; }) => {
      this.total = this.total + (product.price * product.amount)
      
    });
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }



  filterList() {
    this.filtered = []
    
    this.data.forEach(item => {
      if(item.name.toLowerCase().includes(this.search)) {
        this.filtered.push(item)
      }
    });

    console.log(this.filtered)
  }

}
