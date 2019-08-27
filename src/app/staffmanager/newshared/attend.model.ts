import { Time } from '@angular/common';

export class Attend {
    constructor( public date:  Date, public eid: string, public wshift: string, public atime: Time, public ltime: Time){
    }
}