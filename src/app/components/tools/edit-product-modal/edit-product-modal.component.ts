import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css']
})
export class EditProductModalComponent {
  @Input() toEditProduct: any
  @Output() close = new EventEmitter<string>()
  product: any | null = []
  error?: boolean

  constructor(public productService: ProductsService) {  }

  ngOnChanges() {
    this.product = this.toEditProduct
    console.log(this.product)
  }


  editProduct() {
    this.productService.addProduct(this.product).subscribe((res:any) => {
        if(res) {
          this.error = false
          console.log(res)
        } else {
          this.error = true
        }
    })
    
  }

  closeModal() {
    this.close.emit("none")
  }

  deleteProduct() {
    this.productService.outOfStockproduct(this.product).subscribe((res:any) => {
      console.log(res)
    })
  }

}
