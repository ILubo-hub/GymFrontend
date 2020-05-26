import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadgrupalRoutingModule } from './actividadgrupal-routing.module';
import { ActividadCreateComponent } from './actividad-create/actividad-create.component';
import { ActividadListComponent } from './actividad-list/actividad-list.component';

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
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material';
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
import { ActividadListUserComponent } from './actividad-list-user/actividad-list-user.component';
import { ActividadGetinComponent } from './actividad-getin/actividad-getin.component';
import { ActividadGetoutComponent } from './actividad-getout/actividad-getout.component';


@NgModule({
  declarations: [ActividadCreateComponent, ActividadListComponent, ActividadListUserComponent, ActividadGetinComponent, ActividadGetoutComponent],
  imports: [
    CommonModule,
    ActividadgrupalRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    ReactiveFormsModule,

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
export class ActividadgrupalModule { }
