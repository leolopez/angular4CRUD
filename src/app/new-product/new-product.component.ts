import { Component, OnInit } from '@angular/core';
import { Products } from '../products.service';
import { Product } from '../products';
import { uid } from 'angular-uid';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public product: Product = new Product(0,"","");
  public uid : number = 1;
public eid : number = 1;
  constructor(private products:Products, private route: ActivatedRoute) { }
  ngOnInit() {
 this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.eid = params['page'] || 0;      	
 
   		this.products.getProduct().forEach(pro=> {
            if(this.eid==pro.id){
    		this.product = pro;
   		}
         }) 
});
  }
  saveProduct(product: Product) {
	   if (product.id == 0 ) {
            product.id = this.uid+=1;
		 this.products.addProduct(product);
        }	else   if (product.id > 0 ) {
            this.updateProduct(product); 
        }  	
      this.product = new Product(0,"","");
  } 

  updateProduct(product: Product) {
    this.products.updateProduct(product);
  } 
}
