import { Injectable } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { IError } from './models/IError';

@Injectable({
  providedIn: 'root'
})
export class CustomHandlerErrorService {
  constructor() {}
  public handleError(error: IError | HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      // Ocurrió un error del lado del cliente o de la red.
      console.error('Error: ', error.message);
    }
    error.error.message = 'Error: ' + error.message;
    if (error.status === 404) {
      error.error.message = 'Recurso no encontrado';
    }

    if (error.status === 401) {
      error.error.message = 'No autorizado';
    }

    if (error.status === 400) {
      error.error.message = 'Solicitud incorrecta';
    }
    return throwError(error);
  }
}
