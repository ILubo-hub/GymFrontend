import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserEntidad } from './models/user-entidad';
import { UsuarioLogin } from './models/usuarioLogin';
import { CustomHandlerErrorService } from './custom-handler-error.service';
import { UsuarioEntidad } from './helpers/usuario-entidad';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  ServerUrl = environment.apiURL;

  user: null;
  private currentUserSubject: BehaviorSubject<UsuarioLogin>;
  public currentUser: Observable<UsuarioLogin>;

  constructor(
    private http: HttpClient,
    private handler: CustomHandlerErrorService
  ) {
    // Obtener los datos del usuario en localStorage
    this.currentUserSubject = new BehaviorSubject<UsuarioLogin>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    // Establecer un observable para acceder a los datos del usuario
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): UsuarioLogin {
    return this.currentUserSubject.value;
  }
  createUser(user: UsuarioEntidad): Observable<UsuarioEntidad> {
    return this.http
      .post<UsuarioEntidad>(
        this.ServerUrl + 'gym/auth/register',
        user,
        this.httpOptions
      )
      .pipe(catchError(this.handler.handleError.bind(this)));
  }
  loginUser(user: UserEntidad): Observable<UsuarioLogin> {
    return this.http
      .post<UsuarioLogin>(
        this.ServerUrl + 'gym/auth/login',
        user,
        this.httpOptions
      )
      .pipe(
        map(user => {
          // almacene los detalles del usuario y el token jwt
          // en el almacenamiento local para mantener al usuario conectado entre las actualizaciones de la página
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }
  logout() {
    // eliminar usuario del almacenamiento local para cerrar la sesión del usuario
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
