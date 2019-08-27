import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HallService } from '../hall.service';
import { Hall } from '../hall.model';

@Component({
  selector: 'app-hall-edit',
  templateUrl: './hall-edit.component.html',
  styleUrls: ['./hall-edit.component.css']
})
export class HallEditComponent implements OnInit {
  id: number;
  editMode = false;
  hallForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private hallService: HallService,
              private router: Router ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit(){
    const newHall = new Hall(
      this.hallForm.value['name'],
      this.hallForm.value['imagePath'],
      this.hallForm.value['price'],
      this.hallForm.value['description']
    );
    if (this.editMode){
      this.hallService.updateHall(this.id,newHall);
    } else{
      this.hallService.addHall(newHall);
    }
    this.onCancel();
  }

  private initForm(){
    
    let hallName='';
    let hallImagePath = '';
    let hallPrice = '';
    let hallDescription = '';

    if (this.editMode){
      const hall = this.hallService.getHall(this.id);
      hallName = hall.name;
      hallImagePath = hall.imagePath;
      hallPrice = hall.price;
      hallDescription = hall.description;
    }

    this.hallForm = new FormGroup({
      'name': new FormControl(hallName, Validators.required),
      'imagePath': new FormControl(hallImagePath,Validators.required),
      'price': new FormControl(hallPrice,Validators.required),
      'description': new FormControl(hallDescription,Validators.required)
    });
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
