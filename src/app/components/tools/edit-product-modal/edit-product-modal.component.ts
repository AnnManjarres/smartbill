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
    this.productService.editProduct(this.product).subscribe((res:any) => {
        console.log(res)
        this.closeModal()
    })
    
  }

  closeModal() {
    this.close.emit("none")
  }

  deleteProduct() {
    this.product.productStock = 0
    console.log(this.product)
    this.productService.outOfStockproduct(this.product).subscribe((res:any) => {
      console.log(res)
    })
  }

}
