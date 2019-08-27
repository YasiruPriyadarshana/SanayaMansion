
import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/shared/schedule.model';

@Component({
  selector: 'app-work-schedule',
  templateUrl: './work-schedule.component.html',
  styleUrls: ['./work-schedule.component.css']
})
export class WorkScheduleComponent implements OnInit {
  // schedule: Schedule[]=[
  //   new Schedule('Harry','E01','Day'),
  //   new Schedule('Ron','E02','Night'),
  //   new Schedule('Hermeon','E03','Day & Night'),

  // ];

  constructor() { }

  ngOnInit() {
  }

}