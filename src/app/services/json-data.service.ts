import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private http:HttpClient) { }

  //  return skills from skills.json
  getSkills(){
    return this.http.get("../assets/json/skills.json");
  }
  //  return my projects from portfolio.json
  getPortfolio(){
    return this.http.get("../assets/json/portfolio.json");
  }
}