import { Component, OnInit, Input } from '@angular/core';
import { staff } from '../staff.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() staff: staff;

  constructor() { }

  ngOnInit() {
  }

}

// export class NgbdDropdownManual {
// }