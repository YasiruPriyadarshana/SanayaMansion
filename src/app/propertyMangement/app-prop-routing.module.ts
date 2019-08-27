import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { RoomStartComponent } from './rooms/room-start/room-start.component';
import { RoomDetailComponent } from './rooms/room-detail/room-detail.component';
import { RoomEditComponent } from './rooms/room-edit/room-edit.component';
import { HallsComponent } from './halls/halls.component';
import { HallEditComponent } from './halls/hall-edit/hall-edit.component';
import { HallStartComponent } from './halls/hall-start/hall-start.component';
import { HallDetailComponent } from './halls/hall-detail/hall-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/rooms', pathMatch: 'full'},
    { path:'rooms', component: RoomsComponent, children: [
        { path:'',component: RoomStartComponent },
        { path: 'new', component: RoomEditComponent},
        { path: ':id', component: RoomDetailComponent},
        { path: ':id/edit', component: RoomEditComponent}
    ] },
    { path: '', redirectTo: '/halls', pathMatch: 'full'},
    { path:'halls', component: HallsComponent, children: [
        { path:'',component: HallStartComponent },
        { path: 'new', component: HallEditComponent},
        { path: ':id', component: HallDetailComponent},
        { path: ':id/edit', component: HallEditComponent}
    ] },
    { path:'vehicle-list', component: VehicleListComponent },

]
@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule{

}