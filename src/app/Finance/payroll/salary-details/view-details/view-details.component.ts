import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  @ViewChild('empId',{static:false}) empIddRef:ElementRef;
  @ViewChild('empname',{static:false}) empnameRef:ElementRef;
  @ViewChild('des',{static:false}) desRef:ElementRef;
  @ViewChild('sal',{static:false}) salRef:ElementRef;
  @ViewChild('eepf',{static:false}) eepfRef:ElementRef;
  @ViewChild('amu',{static:false}) amuRef:ElementRef;
  @ViewChild('allo',{static:false}) alloRef:ElementRef;
  @ViewChild('netsal',{static:false}) netsalRef:ElementRef;
  

  // @Output() employeeAdded=new EventEmitter<Employee>();
  @Output() employeeAdded = new EventEmitter<Employee>();
  constructor() { 
    
  }

  ngOnInit() {
   
  }

  onAddItem(){
    const empId=this.empIddRef.nativeElement.value;
    const empname=this.empnameRef.nativeElement.value;
    const des=this.desRef.nativeElement.value;
    const sal=this.salRef.nativeElement.value;
    const eepf=this.eepfRef.nativeElement.value
    const amu=this.amuRef.nativeElement.value;
    const allo=this.alloRef.nativeElement.value;
    const netsal=this.netsalRef.nativeElement.value;
  

    const newEmployee=new Employee(empId,empname,des,sal,eepf,amu,allo,netsal);
    this.employeeAdded.emit(newEmployee);
  }

  

}
