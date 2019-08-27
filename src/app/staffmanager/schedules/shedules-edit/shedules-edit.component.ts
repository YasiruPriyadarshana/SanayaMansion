import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Schedule } from 'src/app/shared/schedule.model';

@Component({
  selector: 'app-shedules-edit',
  templateUrl: './shedules-edit.component.html',
  styleUrls: ['./shedules-edit.component.css']
})
export class ShedulesEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false})  nameInputRef: ElementRef;
  @ViewChild('idInput', {static: false})  idInputRef: ElementRef;
  @ViewChild('shiftInput', {static: false})  shiftInputRef: ElementRef;

  @Output() scheduleAdded = new EventEmitter<Schedule>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const schName = this.nameInputRef.nativeElement.value;
    const schId = this.idInputRef.nativeElement.value;
    const schShift = this.shiftInputRef.nativeElement.value;
    const newSchedule = new Schedule(schName, schId, schShift);

    this.scheduleAdded.emit(newSchedule);
  }

}
