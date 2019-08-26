import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

import {FormsModule} from '@angular/forms';
import { StoresComponent } from './stores/stores.component';
import { CateringComponent } from './catering/catering.component';

@NgModule({
  declarations: [
    AppComponent,
    StoresComponent,
    CateringComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
