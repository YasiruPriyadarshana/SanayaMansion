import { Component, OnInit } from '@angular/core';
import { staff } from './staff.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  selectedMember: staff;

  constructor() { }

  ngOnInit() {
  }

}
