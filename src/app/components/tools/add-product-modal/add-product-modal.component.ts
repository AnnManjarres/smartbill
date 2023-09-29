import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

export interface IProduct {
  productName: string
  productPrice: number | null
  productAmount: number | null
  productStock: number | null
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
    productName: '',
    productPrice: null,
    productAmount: null,
    productStock: 1
  }

  constructor(public productService: ProductsService, public router: Router) { }



  closeModal() {
    this.close.emit("none")

  }


  addNewProduct() {
    try {
      this.productService.addProduct(this.product).subscribe((res: any) => {
        if (res) {
          this.error = false
          console.log(res)
          this.router.navigate(['/ventas'])
        }
      })

    }
    catch (err) {
      this.error = true
      console.log(err)
    }


  }

}
