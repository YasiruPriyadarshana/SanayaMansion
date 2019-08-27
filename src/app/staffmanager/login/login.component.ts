import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { staff } from '../staff/staff.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  // constructor(private modalService: NgModel){}

  @ViewChild('f',{static: false}) signupForm: NgForm;


  suggestUsername(){
    const suggestCustomerId='Superuser';
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  // openHome(){
  //   const loginbtn = this.modalService.open(staff);
  // }

}
