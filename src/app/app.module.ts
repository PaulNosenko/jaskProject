import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategorizedComponent } from './categorized/categorized.component';
import { CategclComponent } from './categcl/categcl.component';
import { AscComponent } from './asc/asc.component';
import { DescComponent } from './desc/desc.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    HomeComponent,
    SearchComponent,
    SearchDetailComponent,
    CheckoutComponent,
    CategorizedComponent,
    CategclComponent,
    AscComponent,
    DescComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
