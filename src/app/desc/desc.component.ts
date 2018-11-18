import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent implements OnInit,OnDestroy {
  filtered: [any];
  all: [any];
  req:any;
  email:string;
  
  constructor(private http:Http) { }
  
    ngOnInit() {
      
      this.req = this.http.get('assets/products.json').subscribe(data =>{
        this.all = data.json() as any;
       

        this.all.sort((a, b) => {
          return b.price - a.price;
  
      });
      })

      

    }
  
  
    sendMessage(newHero: string) {
    
      let body = 'Your order has been successfully accepted - Best Wishes from Simple Shop!';
        if (newHero) {
          this.email = newHero;
        }
        let emailt = this.email;
        console.log(this.email)
        this.http.get(`https://mail-sender-api-my.herokuapp.com/send/${emailt}/Confiramtion/${body}`).subscribe(data =>{
                 console.log('works fine')    
                 console.log(emailt)
                 console.log(body)        
        });
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
  
  
    ngOnDestroy(): void {
      this.req.unsubscribe()
    }
  
  }
  