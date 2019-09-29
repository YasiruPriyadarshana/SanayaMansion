import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { Catering} from '../catering.model';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';




@Component({
  selector: 'app-catering-list',
  templateUrl: './catering-list.component.html',
  styleUrls: ['./catering-list.component.css']
})
export class CateringListComponent implements OnInit {


  @Input() index:number;
  private catering:Catering[] = [
    new Catering('Hotel Menu','','https://media-cdn.tripadvisor.com/media/photo-s/0c/15/75/e8/buffet-des-salades.jpg',[new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Catering('Restaurant Menu','','https://s3-eu-central-1.amazonaws.com/lfsa-prod-01/Article/4272/original.jpg?1498629794',[new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
    ];
  
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    
  }


}
