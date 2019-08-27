import { Component, OnInit} from '@angular/core';
import { Hall } from '../hall.model';
import { HallService } from '../hall.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-hall-detail',
  templateUrl: './hall-detail.component.html',
  styleUrls: ['./hall-detail.component.css']
})
export class HallDetailComponent implements OnInit {
   hall: Hall;
   id: number;

  constructor(private hallService: HallService,
               private route: ActivatedRoute,
               private router: Router
              ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'] ; 
        this.hall= this.hallService.getHall(this.id) ;   
      });
  }
  onEditHall(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  onDeleteHall(){
    this.hallService.deleteHall(this.id);
    this.router.navigate(['/halls']);
  }

}
