import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MsjDialogComponent } from './msj-dialog/msj-dialog.component';


@NgModule({
  declarations: [MsjDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule, MatDialogModule
  ],
  exports: [
    MatButtonModule, MatDialogModule
  ]
})
export class ShareModule { }
