import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
myproducts = [];
email:string;
isEmpty:any;
  constructor(private http:Http) { }

  ngOnInit() {
  if(localStorage.getItem("prods") == 'undefined'){
    let arr = [];
    localStorage.setItem("prods", JSON.stringify(arr));
  }
  this.myproducts = JSON.parse(localStorage.getItem("prods"));  
  let arr = JSON.parse(localStorage.getItem("prods"));
    if(arr.length < 1){
        this.isEmpty = true;
    }else{
      this.isEmpty = false;
    }
  }

  delete(id){
    let arr = JSON.parse(localStorage.getItem("prods"));  
    console.log(arr);
    for( var i = 0; i < arr.length; i++){ 
      console.log(arr[i]);
      if ( arr[i].id == id) {
        
        arr.splice(i, 1); 
      }
   }
   console.log(arr);
   localStorage.setItem("prods", JSON.stringify(arr));
  }

  
  deleteAll(){
    let arr = [];
    localStorage.clear()
    localStorage.setItem("prods", JSON.stringify(arr));
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
      window.location.reload(true);
    }

}
