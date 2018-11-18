import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-categorized',
  templateUrl: './categorized.component.html',
  styleUrls: ['./categorized.component.css']
})
export class CategorizedComponent implements OnInit,OnDestroy {
filtered: [any];
all: [any];
req:any;
email:string;

constructor(private http:Http) { }

  ngOnInit() {
    this.req = this.http.get('assets/products.json').subscribe(data =>{
      console.log(data)
      this.all = data.json().filter(item => {
        return item.category == 'smart';
      });
    }
    )
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
