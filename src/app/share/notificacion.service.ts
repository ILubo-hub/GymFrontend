import { Injectable } from '@angular/core';
import {
  MsjDialogModel,
  MsjDialogComponent
} from './msj-dialog/msj-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {
  constructor(public dialog: MatDialog) {}

  msjSuccess(mensaje: string, titulo = 'Afirmativo') {
    const dialogData = new MsjDialogModel(titulo, mensaje);

    const dialogRef = this.dialog.open(MsjDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
      panelClass: 'success'
    });
  }
  msjError(mensaje: string, titulo = 'Error') {
    const dialogData = new MsjDialogModel(titulo, mensaje);

    const dialogRef = this.dialog.open(MsjDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
      panelClass: 'error'
    });
  }
  msjInfo(mensaje: string, titulo = 'Informativo') {
    const dialogData = new MsjDialogModel(titulo, mensaje);

    const dialogRef = this.dialog.open(MsjDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
      panelClass: 'info'
    });
  }
  msjWarning(mensaje: string, titulo = 'Advertencia') {
    const dialogData = new MsjDialogModel(titulo, mensaje);

    const dialogRef = this.dialog.open(MsjDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
      panelClass: 'warning'
    });
  }
  msjValidacion(errores: any) {
    let mensaje = '';
    if (errores != null) {
      if (errores.error.errors) {
        for (const item of errores.error.errors) {
          mensaje += item.message + ' <br />';
        }
      }
      this.msjError(mensaje, errores.error.message);
    } else {
      if (errores.error) {
        mensaje += errores.error + ' <br />';
      }
    }
  }
}
