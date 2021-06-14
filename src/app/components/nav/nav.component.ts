import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styles: [
  ]
})
export class NavComponent implements OnInit {

  items: NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {link : '/home', title:'Home', icon:'home-outline'},  
     // {link:'/user-login',title:'Sign in', icon:'arrow-circle-right-outline'},        
      {link:'/robots/listing',  title:'Listing Robots', icon:'arrow-circle-right-outline'},    
      {link:'/robots/find',  title:'Find a Robot', icon:'arrow-circle-right-outline'},
      
    ]}
}


