import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  addProduct(product: any) {
    return this.http.post('http://localhost:8080/products', product)

  }

  editProduct(product: any) {
    return this.http.put('http://localhost:8080/products', product)
  }

  getProduct() {
    return this.http.get('http://localhost:8080/products')
  }

  outOfStockproduct(product: any) {
    return this.http.put('http://localhost:8080/products', product)
  }

  deleteProductPermanenetly(product:any) {
    return this.http.delete('http://localhost:8080/products', product)
  }


}
