import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hall } from '../hall.model';
import { HallService } from '../hall.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hall-list',
  templateUrl: './hall-list.component.html',
  styleUrls: ['./hall-list.component.css']
})
export class HallListComponent implements OnInit,OnDestroy {
  halls : Hall[] ;
  subscription: Subscription;

  constructor(private hallService: HallService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
  this.subscription =  this.hallService.hallChanged
      .subscribe(
        (halls: Hall[])=>{
          this.halls = halls;
        }
      );
    this.halls = this.hallService.getHalls();
  }
  onNewHall(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
