import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { LoginComponent } from './login/login.component';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';
import { AuthGuard } from '../share/helpers/auth.guard';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioShowComponent } from './usuario-show/usuario-show.component';
import { UsuarioClienteListComponent } from './usuario-cliente-list/usuario-cliente-list.component';
import { UsuarioPayComponent } from './usuario-pay/usuario-pay.component';


const routes: Routes = [
  {
    path: 'usuario/registrar',
    component: CrearUsuarioComponent
  },
  {
    path: 'usuario/login',
    component: LoginComponent
  },
  {
    path: 'usuario/:id',
    component: UsuarioShowComponent
  },
  {
    path: 'usuario/update/:id',
    component: UsuarioUpdateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuario',
    component: UsuarioListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuariocli',
    component: UsuarioClienteListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuariocli/pay/:id',
    component: UsuarioPayComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
