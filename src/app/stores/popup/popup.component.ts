import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { storeItemService } from '../store-items/store-item.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'app-popup',
    templateUrl:  'popup.component.html',
    styleUrls: ['./popup.component.css']
  })
export class PopupComponent implements OnInit {
  constructor(private modalService: ModalService,private formBuilder: FormBuilder,private storeItemService:storeItemService,private router:Router,private route:ActivatedRoute) { }
    registerForm: FormGroup;
    submitted = false;
    control = new FormControl();
    control2 = new FormControl();
    id:number;
    ids:number;
    editMode = false;
    
    itemv: string[] = ['Chicken', 'Fish', 'Green beans', 'Mung bean'];
    
    filtereditemsv: Observable<string[]>;
    

   

    ngOnInit() {
        this.filtereditemsv = this.control.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
          );
          this.route.params.subscribe(
            (params:Params) => {
              this.ids = +params['id'];
              this.editMode = params['id'] != null;
              this.initForm(this.ids);
            }
          );
         
          
          if(!this.editMode){

          this.registerForm = this.formBuilder.group({
              id:['',Validators.nullValidator],
              date:['',Validators.required],
              item:['',Validators.required],
              quantity: ['', Validators.required],
              supplier: ['', Validators.required],
              price: ['', Validators.required],
              request: ['', Validators.required],
              
          });

        }
    }

    
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    
    
    if (this.registerForm.invalid) {
        console.log("fup");
        return;
    }
    if(this.editMode){
          this.storeItemService.updatesitem(this.ids, this.registerForm.value);
        }else{
          this.storeItemService.addsitem(this.registerForm.value);
        }
        this.onCancel();
      

}
onCancel(){
    this.router.navigate(['../../'], {relativeTo: this.route});
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
    openModal2(id: string) {
      this.modalService.open(id);
      this.initForm(this.ids);
  }

    closeModal(id: string) {
        this.modalService.close(id);
    }



   private initForm(ids:number){
      let id='';
      let date='';
      let item='';
      let quantity='';
      let supplier='';
      let price='';
      let request='';
  
      
        const items=this.storeItemService.getsitems(ids);
        id=items.id;
        date=items.date;
        item=items.item;
        quantity=items.quantity;
        supplier=items.supplier;
        price=items.price;
        request=items.request;
        
         
      
      this.registerForm =new FormGroup({
        'id':new FormControl(id),
        'date':new FormControl(date,Validators.required),
        'item':new FormControl(item,Validators.required),
        'quantity':new FormControl(quantity,Validators.required),
        'supplier':new FormControl(supplier,Validators.required),
        'price':new FormControl(price,Validators.required),
        'request':new FormControl(request,Validators.required),
             
        
      });
    }

}

