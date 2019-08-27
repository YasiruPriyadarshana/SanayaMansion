import { Component, OnInit } from '@angular/core';
import { AttachSession } from 'protractor/built/driverProviders';
import { Attend } from '../newshared/attend.model';
  
  @Component({
    selector: 'app-staff-attendance',
    templateUrl: './staff-attendance.component.html',
    styleUrls: ['./staff-attendance.component.css']
  })
  export class StaffAttendanceComponent implements OnInit {
   attendnew : Attend[] = [
    //new Attend('10/10/2019','E01','Night','10:20 PM','12:14 AM')
   ];
  
    constructor() { }
  
    ngOnInit() {
    }
  
    onAttendanceAdded(attend : Attend){
      this.attendnew.push(attend);
    }
  
}
