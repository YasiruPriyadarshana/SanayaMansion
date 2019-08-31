import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';


@Component({
    selector: 'app-popup',
    templateUrl:  'popup.component.html',
    styleUrls: ['./popup.component.css']
  })
export class PopupComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    control = new FormControl();
    itemv: string[] = ['Chicken', 'Fish', 'Green beans', 'Mung bean'];
    filtereditemsv: Observable<string[]>;

    constructor(private modalService: ModalService,private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.filtereditemsv = this.control.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value))
          );
          this.registerForm = this.formBuilder.group({
              item: ['', Validators.required],
              quantity: ['', Validators.required],
              supplier: ['', Validators.required],
              price: ['', Validators.required],
              request: ['', Validators.required],
              
          });
    }

    
get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
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