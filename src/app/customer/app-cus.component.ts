import { Component } from '@angular/core';

@Component({
  selector: 'app-cus-root',
  templateUrl: './app-cus.component.html',
  styleUrls: ['./app-cus.component.css']
})
export class AppComponent {
  loadedFeature= 'rooms';

  onNavigate(feature: string){
    this.loadedFeature = feature;

  }
}
