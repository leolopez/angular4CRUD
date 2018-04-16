import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewProductComponent } from './new-product/new-product.component';
import { rootRouterConfig } from './app.routes.ts';
import {NgForm} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Products } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule, FormsModule,
RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [Products],
  bootstrap: [AppComponent]
})
export class AppModule { }
