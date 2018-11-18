import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  searchQuery:any;
  submitSearch(event, formData){
    let query = formData.value['q']
    console.log(formData)
    console.log(event)
    if(query){
      this.router.navigate(['/search', {q: query}]);
    }
  }
  
}
