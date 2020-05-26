import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CustomHandlerErrorService } from './custom-handler-error.service';
import { AuthenticationService } from './authentication.service';
import { UsuarioLogin } from './models/usuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  urlAPI: string = environment.apiURL;
  currentUser: UsuarioLogin;
  headers = new HttpHeaders();
  constructor(
    private http: HttpClient,
    private handler: CustomHandlerErrorService,
    private authenticationService: AuthenticationService,
  ) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
    if (this.currentUser) {
      if (this.currentUser.access_token) {
        this.headers = this.headers.append(
          'Authorization',
          'Bearer ' + this.currentUser.access_token
        );
      }
    }
  }

  // Listar
  list<T>(endopoint: string, model: T | any): Observable<T | T[]> {

    return this.http
      .get<T | T[]>(this.urlAPI + endopoint, { headers: this.headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // Obtener
  get<T>(endopoint: string, model: T | any, filtro: any): Observable<T | T[]> {
    return this.http
      .get<T | T[]>(this.urlAPI + endopoint + `/${filtro}`, { headers: this.headers })
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  // CREATE
  create<T>(endopoint: string, model: T | any, objCreate: T | any): Observable<T | T[]> {
    return this.http.post<T | T[]>(this.urlAPI + endopoint, objCreate, { headers: this.headers });
  }
  // UPDATE
  update<T>(endopoint: string, model: T | any, objUpdate: T | any): Observable<T | T[]> {
    return this.http.patch<T | T[]>(this.urlAPI + endopoint + `/${objUpdate.id}`, objUpdate, { headers: this.headers });
  }
}
