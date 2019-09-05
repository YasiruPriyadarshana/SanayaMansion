import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sanaya-home',
  templateUrl: './sanaya-home.component.html',
  styleUrls: ['./sanaya-home.component.css']
})
export class SanayaHomeComponent implements OnInit {

  public myInterval: number = 3000;
   public activeSlideIndex: number = 0; 
   public noWrapSlides:boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
