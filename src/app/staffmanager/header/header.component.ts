import { Component, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
    selector: 'app-staff-header',
    templateUrl: './header.component.html'
})
export class StaffHeaderComponent {
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);
    }
}