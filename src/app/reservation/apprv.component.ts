import { Component } from '@angular/core';

@Component({
  selector: 'app-rev-root',
  templateUrl: './apprv.component.html',
  styleUrls: ['./apprv.component.css']
})
export class AppComponent {
  loadedFeature='room';


onNavigate(feature: string){
  this.loadedFeature =feature;
}
}
