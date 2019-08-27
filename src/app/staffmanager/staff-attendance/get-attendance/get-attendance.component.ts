import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Attend } from '../../newshared/attend.model';
  
  @Component({
    selector: 'app-get-attendance',
    templateUrl: './get-attendance.component.html',
    styleUrls: ['./get-attendance.component.css']
  })
  export class GetAttendanceComponent implements OnInit {
    @ViewChild('todayInput',{static: false}) todayInputRef: ElementRef;
    @ViewChild('idInput',{static: false}) idInputRef: ElementRef;
    @ViewChild('shiftInput',{static: false}) shiftInputRef: ElementRef;
    @ViewChild('atInput',{static: false}) atInputRef: ElementRef;
    @ViewChild('ltInput',{static: false}) ltInputRef: ElementRef;
  
    @Output() attendanceAdded = new EventEmitter<Attend>();
  
    constructor() { }
  
    ngOnInit() {
    }
  
    onSaveDetails() {
      const saveDate = this.todayInputRef.nativeElement.value;
      const saveId = this.idInputRef.nativeElement.value;
      const saveShift = this.shiftInputRef.nativeElement.value;
      const saveAt = this.atInputRef.nativeElement.value;
      const saveLt = this.ltInputRef.nativeElement.value;
  
      const newAttendance = new Attend(saveDate,saveId,saveShift,saveAt,saveLt);
  
      this.attendanceAdded.emit(newAttendance);
    }
}