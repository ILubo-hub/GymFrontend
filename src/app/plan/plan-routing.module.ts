import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PlanListComponent } from './plan-list/plan-list.component';
import { PlanCreateComponent } from './plan-create/plan-create.component';
import { AuthGuard } from '../share/helpers/auth.guard';
import { PlanShowComponent } from './plan-show/plan-show.component';
import { PlanPayComponent } from './plan-pay/plan-pay.component';
import { PlanPagadoListComponent } from './plan-pagado-list/plan-pagado-list.component';
import { PlanPendienteListComponent } from './plan-pendiente-list/plan-pendiente-list.component';

const routes: Routes = [
  {
    path: 'plan',
    component: PlanListComponent
  },
  {
    path: 'plan/pg',
    component: PlanPagadoListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'plan/pend',
    component: PlanPendienteListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'plan/crear',
    component: PlanCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'plan/:id',
    component: PlanShowComponent
  },
  {
    path: 'plan/pay/:id',
    component: PlanPayComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule {

}
