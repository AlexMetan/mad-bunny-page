import { Component , HostListener } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent{

  constructor() { }
  menuItems=[
    { label:"Home", link:"#home"},
    { label:"About me", link:"#about-me"},
    { label:"Skills", link:"#my-skills"},
    { label:"Potrfolio", link:"#my-portfolio"}    
  ];
  menuOpened=false;
  menuElement;
  
  //  show/hide mobile menu
  mobeileMenuBtnClick(){
    this.menuElement =document.querySelector('.menu-section');
    let menuIcon=document.querySelector('.menu-icon');
    this.menuOpened=!this.menuOpened;
    if(!this.menuOpened){
      this.menuElement.classList.remove('menu-visible');
      menuIcon.classList.remove('opened-icon');
    }
    else{
      this.menuElement.classList.add('menu-visible');
      menuIcon.classList.add('opened-icon');
    }
  }

  //  add class to navbar on scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    let element = document.querySelector('nav');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-color');
    } 
    else {
      element.classList.remove('navbar-color');
    }
  }

  //  smooth scrolling to section
  smoothScroll(name:string){
    let target =document.querySelector(name);
    const yOffset = -50; 
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
   
    window.scrollTo(0, y);
    
    console.log(y);
     
  }

}
