import { Component } from '@angular/core';

@Component({
  selector: 'appstaff-root',
  templateUrl: './appstaff.component.html',
  styleUrls: ['./appstaff.component.css']
})
export class AppstaffComponent {
  loadedFeature = 'staff';
  
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
