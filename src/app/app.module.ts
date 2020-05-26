import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from './share/share.module';
import { MsjDialogComponent } from './share/msj-dialog/msj-dialog.component';
import { UsuarioModule } from './usuario/usuario.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ErrorInterceptor } from './share/helpers/error.interceptor';
// import { PlanComponent } from './plan/plan-list/plan-list.component';
import { PlanModule } from './plan/plan.module';
import 'hammerjs';
import { ServicioModule } from './servicio/servicio.module';
import { ActividadgrupalModule } from './actividadgrupal/actividadgrupal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    CoreModule,
    ShareModule,
    UsuarioModule,
    ServicioModule,
    PlanModule,
    ActividadgrupalModule,
    AppRoutingModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  entryComponents: [MsjDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
