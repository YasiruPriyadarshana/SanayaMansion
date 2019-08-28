import { Component } from '@angular/core';

@Component({
  selector: 'appev-root',
  templateUrl: './appev.component.html',
  styleUrls: ['./appev.component.scss']
})
export class AppEventComponent {
  title = 'SMH';
  loadedFeature = 'wedding';
  //loadedFeatur = 'other';
  // loadedFeature = 'event-calendar';

  


  onNavigate(feature:string){
    this.loadedFeature = feature;
    //this.loadedFeatur = feature;
    // this.loadedFeatu = feature;


  }
}
