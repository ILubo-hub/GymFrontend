import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
import { ServicioCreateComponent } from './servicio-create/servicio-create.component';
import { AuthGuard } from '../share/helpers/auth.guard';
import { ServicioShowComponent } from './servicio-show/servicio-show.component';
import { ServicioTrashedListComponent } from './servicio-trashed-list/servicio-trashed-list.component';
import { ServicioRestComponent } from './servicio-rest/servicio-rest.component';


const routes: Routes = [
  {
    path: 'servicio',
    component: ServicioListComponent
  },
  {
    path: 'serviciotr',
    component: ServicioTrashedListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicio/crear',
    component: ServicioCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'servicio/:id',
    component: ServicioShowComponent
  },
  {
    path: 'serviciotr/:id',
    component: ServicioRestComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule { }
