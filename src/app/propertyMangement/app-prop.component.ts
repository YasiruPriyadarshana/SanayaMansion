import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-root',
  templateUrl: './app-prop.component.html',
  styleUrls: ['./app-prop.component.css']
})
export class PropAppComponent {
  loadedFeature = 'room';
  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
