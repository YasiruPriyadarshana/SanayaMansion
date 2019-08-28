import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/daily-report/records.model';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.css']
})
export class DailyReportComponent implements OnInit {

  drecords: Record[]=[
    new Record('Resturant','2019-08-07', 18000.00),
    new Record('Hotel','2019-08-07', 75000.00),
    new Record('Hotel','2019-08-07', 120000.00)
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecordAdded(records:Record){
    this.drecords.push(records);
  }

  onDestroy(records:Record){
    this.drecords.splice(0,1);
  }

}
