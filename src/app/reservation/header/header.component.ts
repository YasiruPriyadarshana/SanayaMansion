import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-r-header',
    templateUrl: './header.component.html'
})
export class HeaderRComponent{
    @Output() featureSelected= new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);

    }

}