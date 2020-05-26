import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(mod => mod.UsuarioModule)
  },
  {
    path: 'plan',
    loadChildren: () => import('./plan/plan.module').then(mod => mod.PlanModule)
  },
  {
    path: 'servicio',
    loadChildren: () => import('./servicio/servicio.module').then(mod => mod.ServicioModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./actividadgrupal/actividadgrupal.module').then(mod => mod.ActividadgrupalModule)
  },

  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
