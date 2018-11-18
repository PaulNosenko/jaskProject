import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Http } from '@angular/http';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy{
  private req:any;
  private routeSub:any;
  link:string;
  product:any;
  constructor(private route:ActivatedRoute,
  private http:Http) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params =>{
        this.link = params['link']
        this.http.get('assets/products.json').subscribe(data =>{
          data.json().filter(item =>{
            if(item.name == this.link){
              this.product = item as any
            }
          })
        })
    })
  }

  addToCart(item){
    if((localStorage.getItem("prods")===null)){
      localStorage.setItem("prods", JSON.stringify([]));
    }else{}

    console.log(item);
    var products = JSON.parse(localStorage.getItem("prods"));
    products[products.length] = item;
    localStorage.setItem("prods", JSON.stringify(products));
    alert('Item was succesfully added to your cart!');
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }

}
