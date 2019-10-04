import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Script } from 'vm';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { orderService } from '../../orders/orders.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-hotelform',
  templateUrl: './hotelform.component.html',
  styleUrls: ['./hotelform.component.css']
})
export class HotelformComponent implements OnInit {

  @ViewChild('plate', {static: true}) n1: ElementRef;
  @ViewChild('price', {static: true}) n2: ElementRef;

  hotelForm: FormGroup;
    submitted = false;
    control = new FormControl();
    editMode = false;
    id:number;
 
    amount1: number;
    cus:string;
    
   
  constructor(private formBuilder: FormBuilder,private orderService:orderService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.hotelForm = this.formBuilder.group({
      customerNo:['',Validators.required],
      customerName:['',Validators.required],
      numberOfPlates:['',Validators.required],
      menuType: ['', Validators.required],
      welcomeDrinks: ['', Validators.required],
      amount:[this.amount1],
      date: ['', Validators.required],
      
    });
    
    
  }

  OnInput() {
    let Value1 = this.n1.nativeElement.value;
    let Value2 = this.n2.nativeElement.value;
    let amount1=Value1*Value2;
    this.hotelForm.get('amount').setValue(amount1);
  }
    


  get f() { return this.hotelForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    this.OnInput();
    if (this.hotelForm.invalid) {
      
      this.orderService.addorder(this.hotelForm.value);
        console.log("fup");
        return;
    }
    if(this.editMode){
          this.orderService.updateorder(this.id, this.hotelForm.value);
        }else{
          this.orderService.addorder(this.hotelForm.value);
        }
        this.onCancel();
    
      

}
onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
    this.ngOnInit();
  }

onReset() {
    this.submitted = false;
    this.hotelForm.reset();
}

  

   
   
}  


