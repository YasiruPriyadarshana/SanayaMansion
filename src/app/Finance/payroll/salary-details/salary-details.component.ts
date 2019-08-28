import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.css']
})
export class SalaryDetailsComponent implements OnInit {
  

  payroll: Employee[]=[
    new Employee('E001','Akila','Manager',18000.00,8000.00,3000.00,500.00,78000.00),
    new Employee('E002','Nimal','Head-Cook',10000.00,8000.00,3000.00,5500.00,89000.00),
    new Employee('E003','Madu','Receiptionist',28000.00,8000.00,3000.00,7500.00,90000.00)
  ]
  // getCurrentUser(employee):void{
  //   console.log(employee);
  // }

  onEmployeeAdded(employee:Employee){
    this.payroll.push(employee);
  }

  onDestroy(employee:Employee){
    this.payroll.splice(0,1);
  }

  constructor() { 
    //  console.log(this.payroll)

  }

  ngOnInit() {
  }

}
