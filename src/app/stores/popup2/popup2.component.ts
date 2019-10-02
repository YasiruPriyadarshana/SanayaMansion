import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { decorationItemService } from '../decoration/decoration.service';


@Component({
    selector: 'app-popup2',
    templateUrl:  'popup2.component.html',
    styleUrls: ['./popup2.component.css']
  })
export class PopupComponent2 implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    control = new FormControl();
    itemv: string[] = ['Paper', 'Flowers', 'balloons', 'banners'];
    id:number;
    editMode = false;
    filtereditemsv: Observable<string[]>;
    

    constructor(private modalService: ModalService,private formBuilder: FormBuilder, private decorationService:decorationItemService,private router:Router,private route:ActivatedRoute) { }

    ngOnInit() {
      this.filtereditemsv = this.control.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      
          
          this.registerForm = this.formBuilder.group({
              id:['',Validators.nullValidator],
              date:['',Validators.required],
              decorations: ['', Validators.required],
              quantity: ['', Validators.required],
              supplier: ['', Validators.required],
              price: ['', Validators.required],
              request: ['', Validators.required],
              
          });
    }

    
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;

    
  if (this.registerForm.invalid) {
      console.log("fup");
      return;
  }
  if(this.editMode){
        this.decorationService.updateditem(this.id, this.registerForm.value);
      }else{
        this.decorationService.addditem(this.registerForm.value);
      }
      this.onCancel();
    
}
onCancel(){
  this.router.navigate(['../'], {relativeTo: this.route});
  this.ngOnInit();
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
private _filter(value: string): string[] {
  const filterValue = this._normalizeValue(value);
  return this.itemv.filter(itemvs => this._normalizeValue(itemvs).includes(filterValue));
}
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}