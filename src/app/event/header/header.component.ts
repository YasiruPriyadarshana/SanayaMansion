import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ev-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class EventHeaderComponent  {

 @Output() featureSelected = new EventEmitter<string>();

 onSelect(feature:string){
   this.featureSelected.emit(feature);
 }
}
