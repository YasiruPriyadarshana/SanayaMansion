import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { staff } from '../../staff.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  @Input()  staff: staff;
  @Output()  memberSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.memberSelected.emit();
  }

}
