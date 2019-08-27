import { Component, OnInit,Input,} from '@angular/core';
import {Catering} from '../../catering.model'


@Component({
  selector: 'app-catering-item',
  templateUrl: './catering-item.component.html',
  styleUrls: ['./catering-item.component.css']
})
export class CateringItemComponent implements OnInit {
  @Input() catering:Catering;
  @Input() index:number;
  
 
  ngOnInit() {
  }
  

}
