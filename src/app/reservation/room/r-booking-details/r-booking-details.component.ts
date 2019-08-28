import { Component, OnInit,ViewChild,ElementRef, Output,EventEmitter } from '@angular/core';
import { Rbooking } from '../../nshared/room.model';

@Component({
  selector: 'app-r-booking-details',
  templateUrl: './r-booking-details.component.html',
  styleUrls: ['./r-booking-details.component.css']
})
export class RBookingDetailsComponent implements OnInit {
  @ViewChild('bIdInput',{static:false}) bIdInputRef:ElementRef;
  @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
  @ViewChild('nicInput',{static:false}) nicInputRef:ElementRef;
  @ViewChild('emailInput',{static:false}) emailInputRef:ElementRef;
  @ViewChild('phone',{static:false}) phoneInputRef:ElementRef;
  @ViewChild('arriveInput',{static:false}) arriveInputRef:ElementRef;
  @ViewChild('departInput',{static:false}) departInputRef:ElementRef;
  @ViewChild('sRoomInput',{static:false}) sRoomInputRef:ElementRef;
  @ViewChild('dRoomInput',{static:false}) dRoomInputRef:ElementRef;


  @Output() RbookingAdded=new EventEmitter<Rbooking>();
  constructor() { }

  ngOnInit() {
  }

  onbook(){
    const bId=this.bIdInputRef.nativeElement.value;
    const bname=this.nameInputRef.nativeElement.value;
    const bnic=this.nicInputRef.nativeElement.value;
    const bemail=this.emailInputRef.nativeElement.value;
    const phone=this.phoneInputRef.nativeElement.value;
    const barrive=this.arriveInputRef.nativeElement.value;
    const bdepart=this.departInputRef.nativeElement.value;
    const bsroom=this.sRoomInputRef.nativeElement.value;
    const bdroom=this.sRoomInputRef.nativeElement.value;


   
    const newBooking1=new Rbooking(bId,bname,bnic,bemail,phone,phone,barrive,bsroom,bdroom)
    this.RbookingAdded.emit(newBooking1);
    }
  }


