import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent} from './registro/registro.component';
import { VistaComponent } from './vista/vista.component';
import { EditarComponent } from './editar/editar.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'vista',
    component:VistaComponent
  },

  {
    path:'crear',
    component:RegistroComponent
  },
  {
    path:'editar',
    component:EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
