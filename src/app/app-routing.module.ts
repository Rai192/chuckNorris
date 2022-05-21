import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanActivate} from '@angular/router';
import { MainComponent } from './main/main.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  { path: '', 
  component: MainComponent
  },
  {
  path: 'app-resultado/tipo/:tipo/solicitud/:solicitud', 
  component: ResultadoComponent,
  },
  {
    path: 'app-resultado', 
    component: ResultadoComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
