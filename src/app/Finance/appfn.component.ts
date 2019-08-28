import { Component } from '@angular/core';

@Component({
  selector: 'app-root-fn',
  templateUrl: './appfn.component.html',
  styleUrls: ['./appfn.component.css']
})
export class FinanceAppComponent {
  
  loadedFeature='home';
  onNavigate(feature: string){
        this.loadedFeature=feature;
  }
}
