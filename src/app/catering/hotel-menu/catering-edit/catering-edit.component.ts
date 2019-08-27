import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-catering-edit',
  templateUrl: './catering-edit.component.html',
  styleUrls: ['./catering-edit.component.css']
})
export class CateringEditComponent implements OnInit {
  id:number;
  editMode = false;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
      }
    );
  }

}
