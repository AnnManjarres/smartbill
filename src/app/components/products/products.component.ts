import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

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
  data : any = []


  constructor(public productService: ProductsService) {
    this.bringProducts()
    this.filtered = this.data

  }


  filterList() {
    this.filtered = []
    if(this.data.length > 0) {
      this.data.forEach((item:any)=> {
        if(item.name.toLowerCase().includes(this.search)) {
          this.filtered.push(item)
        }
      });
    }
    
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






  bringProducts() {
    this.productService.getProduct().subscribe((res:any) => {
      console.log(res)
      this.filtered = res
    })
  }
}
