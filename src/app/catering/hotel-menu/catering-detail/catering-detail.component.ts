import { Component, OnInit, } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { Catering } from '../catering.model';

@Component({
  selector: 'app-catering-detail',
  templateUrl: './catering-detail.component.html',
  styleUrls: ['./catering-detail.component.css'],

})
export class CateringDetailComponent implements OnInit {
  catering:Catering;
   id:number;
   
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    
  }


  onEditCatering(){
    
    this.router.navigate(['../',this.id, 'edit'], {relativeTo: this.route});
  }
  
}
