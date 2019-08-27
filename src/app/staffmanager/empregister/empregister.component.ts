import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empregister',
  templateUrl: './empregister.component.html',
  styleUrls: ['./empregister.component.css']
})
export class EmpregisterComponent {

    @ViewChild('f',{static:false}) signupForm: NgForm;
    defaultQuestion='FullBoard';
  
  
    suggestUsername(){
      const suggestCustomerId='Superuser';
    }
  
    onSubmit(formdata: NgForm){
      console.log(this.signupForm);
    }






  
}