import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Record } from 'src/app/daily-report/records.model';

@Component({
  selector: 'app-edit-daily-report',
  templateUrl: './edit-daily-report.component.html',
  styleUrls: ['./edit-daily-report.component.css']
})
export class EditDailyReportComponent implements OnInit {

  @ViewChild('name',{static:false}) fieldInputRef:ElementRef;
  @ViewChild('adate',{static:false}) dateInputRef:ElementRef;
  @ViewChild('amu',{static:false}) amtInputRef:ElementRef;

  @Output() recordAdded=new EventEmitter<Record>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const name=this.fieldInputRef.nativeElement.value;
    const adate=this.dateInputRef.nativeElement.value;
    const amu=this.amtInputRef.nativeElement.value;

    const newRecord=new Record(name,adate,amu);
    this.recordAdded.emit(newRecord);
  }

}
