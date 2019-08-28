import { Component, OnInit,ViewChild, ElementRef,Output,EventEmitter } from '@angular/core';
import{booking} from '../../shared/hall.model';
@Component({
  selector: 'app-h-booking-details',
  templateUrl: './h-booking-details.component.html',
  styleUrls: ['./h-booking-details.component.css']
})
export class HBookingDetailsComponent implements OnInit {

@ViewChild('fnameInput',{static:false}) fnameInputRef:ElementRef;
@ViewChild('lnameInput',{static:false}) lnameInputRef:ElementRef;
@ViewChild('nicInput',{static:false}) nicInputRef:ElementRef;
@ViewChild('addressInput',{static:false}) addressInputRef:ElementRef;
@ViewChild('phoneInput',{static:false}) phoneInputRef:ElementRef;
@ViewChild('emailInput',{static:false}) emailInputRef:ElementRef;
@ViewChild('halltypeinput',{static:false}) htypeInputRef:ElementRef;
@ViewChild('dateInput',{static:false}) dateInputRef:ElementRef;
@ViewChild('purposeInput',{static:false}) purposeInputRef:ElementRef;
@ViewChild('payInput',{static:false})payInputRef:ElementRef;


@Output() bookingAdded =new EventEmitter<booking>();
  constructor() { }

  ngOnInit() {
  }


  onbook(){
    const bfname=this.fnameInputRef.nativeElement.value;
    const blname=this.lnameInputRef.nativeElement.value;
    const bnic=this.nicInputRef.nativeElement.value;
    const baddress=this.addressInputRef.nativeElement.value;
    const bphone=this.phoneInputRef.nativeElement.value;
    const bemail=this.emailInputRef.nativeElement.value;
    const bhType=this.htypeInputRef.nativeElement.value;
    const bdateInput=this.dateInputRef.nativeElement.value;
    const bpurpose=this.purposeInputRef.nativeElement.value;
    const bpay=this.payInputRef.nativeElement.value;

const newBooking =new booking(bfname,blname,bnic,baddress,bphone,bemail,bhType,bdateInput,bpurpose,bpay)
    this.bookingAdded.emit(newBooking);
  }

}
