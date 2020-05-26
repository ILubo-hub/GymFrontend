import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioCreateComponent } from './servicio-create/servicio-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ServicioListComponent } from './servicio-list/servicio-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ServicioShowComponent } from './servicio-show/servicio-show.component';
import { ServicioTrashedListComponent } from './servicio-trashed-list/servicio-trashed-list.component';
import { ServicioRestComponent } from './servicio-rest/servicio-rest.component';


@NgModule({
  declarations: [ServicioCreateComponent, ServicioListComponent, ServicioShowComponent, ServicioTrashedListComponent, ServicioRestComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatPaginatorModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatBadgeModule,
    MatChipsModule,
    MatGridListModule,
    MatRadioModule,
    MatToolbarModule,
    MatTooltipModule,
    ServicioRoutingModule
  ], exports: [
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatBadgeModule,
    MatChipsModule,
    MatGridListModule,
    MatRadioModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
  ]
})
export class ServicioModule { }
