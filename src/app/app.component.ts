import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, Router, Event } from '@angular/router';

declare var $:any;

@Component({
    selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private authService:AuthService,private http:HttpClient,private activatedRoute : ActivatedRoute,private router:Router){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        
      }

      if (event instanceof NavigationEnd) {
        
      }

      if (event instanceof NavigationError) {
          
      }
  });

  

  }
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDCB-eAmpDjDskVHREU-B6yc10R6s5UwOM",
      authDomain: "sanayamansion-e55bf.firebaseapp.com"
    });

    $('.tree-toggle').click(function () {	$(this).parent().children('ul.tree').toggle(200)
  });
$(function(){
$('.tree-toggle').parent().children('ul.tree').toggle(200);
  });
  
      
  }
  


}
