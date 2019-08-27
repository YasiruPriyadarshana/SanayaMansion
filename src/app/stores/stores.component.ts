import { Component, OnInit } from '@angular/core';
import { type } from './store.model';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {
  type:type[] = [
    new type('Decoration',' ','../assets/images/recipe-1.ico')
    ,new type('Store',' ','../assets/images/recipe-2.png')
    ,new type('Request',' ','../assets/images/recipe-3.png')
  ];
  constructor() { }
  gettype(index: number){
    return this.type[index];
  }
  ngOnInit() {
  }

}
