import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultadoComponent } from './resultado/resultado.component';
import { GuardGuard } from './guard.guard';
import { AvisoComponent } from './aviso/aviso.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ResultadoComponent,
    AvisoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule  
  ],
  exports: [RouterModule],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
