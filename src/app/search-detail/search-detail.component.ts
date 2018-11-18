import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyService } from '../services/my-service.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css'],
  providers: [MyService]
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  productList:[any];
  private routeSub:any;
  query:string;
  private req: any;
  email:string;

  constructor(private route:ActivatedRoute, private myservice: MyService,private http:Http) { }
  
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(data =>{
      this.query = data['q']
      this.req = this.myservice.search(this.query).subscribe(data=>{
        this.productList = data as [any]
      })
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

  ngOnDestroy(){
    this.routeSub.unsubscribe()
   this.req.unsubscribe()
  }

}
