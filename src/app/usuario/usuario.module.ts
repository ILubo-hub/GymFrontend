import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule} from '@angular/material';
import { MatNativeDateModule} from '@angular/material';
import { UsuarioUpdateComponent } from './usuario-update/usuario-update.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioShowComponent } from './usuario-show/usuario-show.component';
import { UsuarioClienteListComponent } from './usuario-cliente-list/usuario-cliente-list.component';
import { UsuarioPayComponent } from './usuario-pay/usuario-pay.component';

@NgModule({
  declarations: [CrearUsuarioComponent, LoginComponent, UsuarioUpdateComponent, UsuarioListComponent, UsuarioShowComponent, UsuarioClienteListComponent, UsuarioPayComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatChipsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    UsuarioRoutingModule,

  ], exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatPaginatorModule
  ]
})
export class UsuarioModule { }
