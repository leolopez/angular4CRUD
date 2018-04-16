import { Component } from '@angular/core';
import { Products } from './products.service';
import { Product } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent {
   private products: Product[] =[];
   constructor(private p: Products) {    
    this.products = this.p.getProduct();
  }

  removeProduct(product: Product) {
    this.p.deleteProduct(product);
  }  
}   
