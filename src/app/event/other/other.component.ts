import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event2={
    Date:"4/5/12",
    Starting_Time:"12.56",
    Ending_Time:"23.00",
    Time_for_Welcome_Drink:"7.00",
    Time_for_Meal:"4.23"
  }


  onSubmit(formdata:NgForm){
    console.log(this.event2)
  }


}
