import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-weddings',
  templateUrl: './weddings.component.html',
  styleUrls: ['./weddings.component.scss']
})
export class WeddingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event1={
    Date:"4/5/12",
    Time_to_Poruwa_ceremony:"12.56",
    Time_for_Welcome_Drink:"23.00",
    Time_for_Evening_Drink:"7.00",
    Name_of_the_Floral_Arrangement:"nimal",
    Name_of_the_Photographer:"vevra",
    Type_of_the_Light_System:"warm"
  }


  onSubmit(formdata:NgForm){
    console.log(this.event1)
  }

}
