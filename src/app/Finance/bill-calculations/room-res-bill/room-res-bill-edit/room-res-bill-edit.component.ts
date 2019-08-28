import { Component, OnInit,ViewChild,ElementRef,Output,EventEmitter } from '@angular/core';
import { Res } from '../res.module';

@Component({
  selector: 'app-room-res-bill-edit',
  templateUrl: './room-res-bill-edit.component.html',
  styleUrls: ['./room-res-bill-edit.component.css']
})
export class RoomResBillEditComponent implements OnInit {
  @ViewChild('bookId',{static:false}) bookIddRef:ElementRef;
  @ViewChild('mType',{static:false}) mTypeRef:ElementRef;
  @ViewChild('noOfPl',{static:false}) noOfPlRef:ElementRef;
  @ViewChild('extra',{static:false}) extraRef:ElementRef;
  @ViewChild('amount',{static:false}) amuRef:ElementRef;
  
  @Output() resAdded = new EventEmitter<Res>();
  constructor() { }

  ngOnInit() {
  }
  onAddRes(){
    const bookId=this.bookIddRef.nativeElement.value;
    const mType=this.mTypeRef.nativeElement.value;
    const noOfPl=this.noOfPlRef.nativeElement.value;
    const extra=this.extraRef.nativeElement.value;
    const amount=this.amuRef.nativeElement.value;

    const newRes=new Res(bookId,mType,noOfPl,extra,amount);
    this.resAdded.emit(newRes);
  }
    

}
