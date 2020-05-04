import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { JsonDataService } from 'src/app/services/json-data.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit, OnDestroy {

  constructor(private jsonDataService:JsonDataService) { }
  sub1:Subscription;  
  categories=[
    {label:"All",name:""},
    {label:"Angular",name:"angular"},
    {label:"Wordpress",name:"wordpress"}
  ];
  categorySelect="";
  portfolio;
  filteredPortfolio;

  ngOnInit() {   
    this.getPortfolio();
  }
  //return portfolio array from jsonDataService
  getPortfolio(){
    this.sub1=this.jsonDataService.getPortfolio().subscribe((resp)=>{
      this.portfolio=this.filteredPortfolio=resp;
    });
  }
  //filter portfolio by category
  portfolioFilter(){
    this.filteredPortfolio=this.portfolio.filter(arr=>arr.category.includes(this.categorySelect));
  }
  //destroy subscription
  ngOnDestroy(){
    if(this.sub1)
      this.sub1.unsubscribe();
  }
}
