import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoresComponent } from './stores/stores.component';
import { CateringComponent } from './catering/catering.component';
import { SanayaHomeComponent } from './sanaya-home/sanaya-home.component';


const routes: Routes = [
  { path: '', redirectTo:'/Home', pathMatch:'full' },
  { path: 'Home', component:SanayaHomeComponent},
  { path: 'catering', component:CateringComponent, children: [
    
  ]},
  { path: 'stores', component:StoresComponent, children: [
    
  ]}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
