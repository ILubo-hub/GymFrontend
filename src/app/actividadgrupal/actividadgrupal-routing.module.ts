import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadCreateComponent } from './actividad-create/actividad-create.component';
import { AuthGuard } from '../share/helpers/auth.guard';
import { ActividadListComponent } from './actividad-list/actividad-list.component';
import { ActividadListUserComponent } from './actividad-list-user/actividad-list-user.component';
import { ActividadGetinComponent } from './actividad-getin/actividad-getin.component';
import { ActividadGetoutComponent } from './actividad-getout/actividad-getout.component';



const routes: Routes = [
  {
    path: 'actividad',
    component: ActividadListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actividadus',
    component: ActividadListUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actividad/crear',
    component: ActividadCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actividadus/:id',
    component: ActividadGetinComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actividadus/out/:id',
    component: ActividadGetoutComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadgrupalRoutingModule { }
