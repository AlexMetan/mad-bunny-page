import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  constructor(private jsonDataService:JsonDataService) { }
  sub1:Subscription;
  mySkills;

  ngOnInit() {
    this.getSkills();
  }
  //get skills from skills service 
  getSkills(){
    this.sub1=this.jsonDataService.getSkills().subscribe((resp)=>{
      this.mySkills=resp;     
    });
  }
  //destroy subscription
  ngOnDestroy(){
    if(this.sub1)
      this.sub1.unsubscribe();
  }

}
