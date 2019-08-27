import { Component, OnInit, ElementRef, ViewChild,Output,EventEmitter } from '@angular/core';
import {Supplier} from '../../shared/supplier.model';

@Component({
  selector: 'app-display-s',
  templateUrl: './display-s.component.html',
  styleUrls: ['./display-s.component.css']
})
export class DisplaySComponent implements OnInit {
  @ViewChild('cusnameInput', {static: false})  cusnameInputRef: ElementRef;
  @ViewChild('cusidInput', {static: false})  cusidInputRef: ElementRef;
  @ViewChild('emailtInput', {static: false})  emailInputRef: ElementRef;
  @ViewChild('cnameInput', {static: false})  cnameInputRef: ElementRef;
  @ViewChild('addressInput', {static: false})  addressInputRef: ElementRef;
  @ViewChild('phoneInput', {static: false})  phoneInputRef: ElementRef;

  @Output() supplierAdded = new EventEmitter<Supplier>();


  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const Ncusname = this.cusnameInputRef.nativeElement.value;
    const Ncusid = this.cusidInputRef.nativeElement.value;
    const NsEmail = this.emailInputRef.nativeElement.value;
    const Ncname = this.cnameInputRef.nativeElement.value;
    const Naddress = this.addressInputRef.nativeElement.value;
    const Nphn = this.phoneInputRef.nativeElement.value;

    const newSupplier = new Supplier(Ncusname, Ncusid, NsEmail,Ncname,Naddress,Nphn);

    this.supplierAdded.emit(newSupplier);
  }

}
