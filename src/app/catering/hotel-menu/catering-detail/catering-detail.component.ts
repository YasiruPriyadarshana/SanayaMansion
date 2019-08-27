import { Component, OnInit, } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { CateringService } from '../catering.service';
import { Catering } from '../catering.model';

@Component({
  selector: 'app-catering-detail',
  templateUrl: './catering-detail.component.html',
  styleUrls: ['./catering-detail.component.css'],
  providers: [CateringService]
})
export class CateringDetailComponent implements OnInit {
  catering:Catering;
   id:number;
   
  constructor(private cateringService:CateringService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.catering =this.cateringService.getCaterings(this.id);
      }
    );
  }

  onAddToSoppingList(){
    this.cateringService.addIngredientsToSoppingList(this.catering.ingredients);
  }

  onEditCatering(){
    
    this.router.navigate(['../',this.id, 'edit'], {relativeTo: this.route});
  }
}
