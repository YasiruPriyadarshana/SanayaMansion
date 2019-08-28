import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class CRoomsComponent {
  @ViewChild('f',{static:false}) signupForm: NgForm;
  defaultQuestion='FullBoard';


  suggestUsername(){
    const suggestCustomerId='Superuser';
  }

 // onSubmit(form: NgForm){
  //   console.log(form);
  //}

  onSubmit(){
    console.log(this.signupForm);
  }
 // constructor() { }

  //ngOnInit() {
 // } 

}
