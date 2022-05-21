import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanActivate} from '@angular/router';
import { AvisoComponent } from './aviso/aviso.component';
import { GuardGuard } from './guard.guard';
import { MainComponent } from './main/main.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  { path: '', 
  component: MainComponent,
  },
  {
  path: 'app-resultado/tipo/:tipo/solicitud/:solicitud', 
  component: ResultadoComponent,
  canActivate:[GuardGuard]
  },
  {
    path: 'app-resultado', 
    component: ResultadoComponent,
    canActivate:[GuardGuard]
    },
    {
    path: 'aviso', 
    component: AvisoComponent,
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
