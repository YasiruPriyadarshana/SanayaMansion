import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from './stores/stores.component';
import { CateringComponent } from './catering/catering.component';
import { SanayaHomeComponent } from './sanaya-home/sanaya-home.component';
import { RoomsComponent } from './propertyMangement/rooms/rooms.component';
import { RoomStartComponent } from './propertyMangement/rooms/room-start/room-start.component';
import { RoomEditComponent } from './propertyMangement/rooms/room-edit/room-edit.component';
import { RoomDetailComponent } from './propertyMangement/rooms/room-detail/room-detail.component';
import { HallsComponent } from './propertyMangement/halls/halls.component';
import { HallStartComponent } from './propertyMangement/halls/hall-start/hall-start.component';
import { HallEditComponent } from './propertyMangement/halls/hall-edit/hall-edit.component';
import { HallDetailComponent } from './propertyMangement/halls/hall-detail/hall-detail.component';
import { VehicleListComponent } from './propertyMangement/vehicle-list/vehicle-list.component';


const routes: Routes = [
  { path: '', redirectTo:'/Home', pathMatch:'full' },
  { path: 'Home', component:SanayaHomeComponent},
  { path: 'catering', component:CateringComponent, children: [
    
  ]},
  { path: 'stores', component:StoresComponent, children: [
    
  ]},
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
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
