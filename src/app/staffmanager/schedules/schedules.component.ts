import { Component, OnInit } from '@angular/core';
import { Schedule } from '../shared/schedule.model';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {
   wschedules: Schedule[] =[
    new Schedule('Harry','E01','Day'),
    new Schedule('Ron','E02','Night'),
    new Schedule('Hermeon','E03','Day & Night'),

   ];

  constructor() { }

  ngOnInit() {
  }

  onScheduleAdded(schedule : Schedule){
    this.wschedules.push(schedule);
  }

  onDestroy(){
    this.wschedules.splice(0,1);
  }

  onUpdate(){
    this.wschedules[0].name = 'Changed!';
    
  }

}
