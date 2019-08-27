import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-cu-header',
    templateUrl: './header.component.html'
})
export class CusHeaderComponent{
    @Output() featureSelected= new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);

    }

}