import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Event } from '../event.module';

@Component({
  selector: 'app-event-bill-edit',
  templateUrl: './event-bill-edit.component.html',
  styleUrls: ['./event-bill-edit.component.css']
})
export class EventBillEditComponent implements OnInit {
  @ViewChild('bookId',{static:false}) bookIddRef:ElementRef;
  @ViewChild('rType',{static:false}) rTypeRef:ElementRef;
  @ViewChild('bType',{static:false}) bTypeRef:ElementRef;
  @ViewChild('noOfDay',{static:false}) noOfDayRef:ElementRef;
  @ViewChild('noOfRooms',{static:false}) noOfRoomsfRef:ElementRef;
  @ViewChild('amount',{static:false}) amuRef:ElementRef;
  
   
  @Output() eventAdded = new EventEmitter<Event>();
  constructor() { }

  ngOnInit() {
  }

  onAddEvent(){
    const bookId=this.bookIddRef.nativeElement.value;
    const rType=this.rTypeRef.nativeElement.value;
    const bType=this.bTypeRef.nativeElement.value;
    const noOfDay=this.noOfDayRef.nativeElement.value;
    const noOfRooms=this.noOfRoomsfRef.nativeElement.value
    const amount=this.amuRef.nativeElement.value;
    
  

    const newEvent=new Event(bookId,rType,bType,noOfDay,noOfRooms,amount);
    this.eventAdded.emit(newEvent);
  }

}
