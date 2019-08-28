import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-f-header',
    templateUrl: './header.component.html'
})
export class FHeaderComponent{
    @Output() featureSelected=new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);
    }

}
