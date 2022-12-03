import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menus:any;
  constructor(private router:Router) {this.menus = [
    {
      photo:'/assets/pexels-daniel-reche-1556698.jpg',
      description:"Sandwich",
    },
    {
      photo:'/assets/pexels-lukas-1352274.jpg',
      description:"Fries & Chicken",
    },
    {
      photo:'/assets/pexels-engin-akyurt-1460872.jpg',
      description:"Maccaroni"
    },
    {
      photo:'/assets/pexels-engin-akyurt-3356409.jpg',
      description:"Fries & Sandwich",
    },
    {
      photo:'/assets/pexels-valeria-boltneva-1251198.jpg',
      description:"Beef Burger",
    },
    {
      photo:'/assets/pexels-jonatan-rios-4664235.jpg',
      description:"Pizza",
    },
  ];}


  ngOnInit(): void {
  }
  onMenuSelected(){
    this.router.navigate (['our-menu']);
  }
  onAboutSelected(){
    this.router.navigate(['about-us']);
  }

}
