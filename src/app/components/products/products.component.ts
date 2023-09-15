import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() toEditProduct: any
  product: any = []
  displayStyle =  "none"
  displayStyleEdit = "none"
  filtered:any
  search:string | any = ""
  data = [
    {"id": 1, "name": "Coca cola", "amount": 10, "price": 3400 },
    {"id": 2, "name": "Coca cola zero", "amount": 5, "price": 3800 },
    {"id": 3, "name": "Redbull", "amount": 20, "price": 6400 },
    {"id": 4, "name": "Agua", "amount": 10, "price": 3000 }
  ]


  constructor() {
    this.filtered = this.data

  }


  filterList() {
    this.filtered = []
    
    this.data.forEach(item => {
      if(item.name.toLowerCase().includes(this.search)) {
        this.filtered.push(item)
      }
    });
  }

  openPopup() {
    this.displayStyle = "block"
  }


  closePopup(e:any) {
    this.displayStyle = e
  }

  showEditModal(item: any) {
    this.displayStyleEdit = "block"
    this.product = item

  }

  hideEditModal(e:any) {
    this.displayStyleEdit = e
  }

}
