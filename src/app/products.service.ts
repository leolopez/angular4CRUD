import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from './products';
import { findIndex } from 'lodash';

@Injectable()
export class Products {

  products = [
  new Product(1, 'Windstorm','Windstorm')
  ];

  constructor() { }

  addProduct(product: Product) {
    this.products.push(product)
  }
  getProduct() {
   return this.products;
  }
  updateProduct(product: Product) {
    let index = findIndex(this.products, (p: Product) => {
      return p.id === product.id;
    });
    this.products[index] = product;
  }

  deleteProduct(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
    console.log(this.products);
  }
}
