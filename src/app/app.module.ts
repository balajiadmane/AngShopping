import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './service/product.service';
import { FormsModule } from '@angular/forms';

import { AddProductComponent } from './private/add-product/add-product.component';
import { HeaderComponent } from './layout/header/header.component'
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
