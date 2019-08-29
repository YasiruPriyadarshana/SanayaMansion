import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal/modal.service';



@Component({
    selector: 'app-popup',
    templateUrl:  'popup.component.html',
    styleUrls: ['./popup.component.css']
  })
export class PopupComponent implements OnInit {
    

    constructor(private modalService: ModalService) { }

    ngOnInit() {
       
    }

    openModal(id: string) {
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}