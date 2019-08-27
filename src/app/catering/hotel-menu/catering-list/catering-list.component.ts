import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Catering} from '../catering.model';
import { CateringService } from '../catering.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-catering-list',
  templateUrl: './catering-list.component.html',
  styleUrls: ['./catering-list.component.css']
})
export class CateringListComponent implements OnInit {
 
  catering: Catering[];
 
  
  constructor(private cateringService: CateringService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.catering = this.cateringService.getCatering();
    
  }

  onNewCatering(){
    this.router.navigate(['new'], { relativeTo: this.route});
  }

}
