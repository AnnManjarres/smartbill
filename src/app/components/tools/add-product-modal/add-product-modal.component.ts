import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

export interface IProduct {
  id: number | null
  name: string
  price: number | null
  amount: number | null
}

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent {

  @Output() close = new EventEmitter<string>();
  error?: boolean
  product: IProduct = {
    id: null,
    name: '',
    price: null,
    amount: null
  }

  constructor(public productService: ProductsService) { }



  closeModal() {
    this.close.emit("none")

  }


  addNewProduct() {
    try {
      this.productService.addProduct(this.product).subscribe((res: any) => {
        if (res) {
          this.error = false
          console.log(res)
        }
      })

    }
    catch (err) {
      this.error = true
      console.log(err)
    }


  }

}
