import { Component, OnInit } from '@angular/core';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';

import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: UserEntidad;
  datos: UsuarioLogin;
  error: any;
  formLogin: FormGroup;

  constructor(
    public fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {
    if (auntenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
    this.reactiveForm();
  }

  reactiveForm() {
    /*https://angular.io/guide/reactive-forms
     https://angular.io/api/forms/Validators */

    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  mensajes() {
    let auth = false;
    let register = false;
    // Mensajes
    this.route.queryParams.subscribe(params => {
      auth = params.auth || false;
      register = params.register || false;
    });
    if (auth) {
      this.notificacion.msjWarning(
        'Usuario no autentificado',
        'Autentificación usuario'
      );
    }
    if (register) {
      this.notificacion.msjSuccess(
        'Registro de usuario satisfactorio! Por favor especifique las credenciales para ingresar!',
        'Usuario'
      );
    }
  }

  ngOnInit() {
    this.mensajes();
  }

  submitForm() {
    // stop here if form is invalid
    if (this.formLogin.invalid) {
      return;
    }
    console.log(this.formLogin.value);
    // suscripción para uso del servicio
    this.auntenticationService.loginUser(this.formLogin.value).subscribe(
      (respuesta: UsuarioLogin) => (this.datos = respuesta),
      error => (this.error = error),
      () => {
        this.router.navigate(['plan/']);
      }
    );
  }
  onReset() {
    this.formLogin.reset();
  }
  /* Handle form errors in Angular 8 */
  public errorHandling = (control: string, error: string) => {
    return this.formLogin.controls[control].hasError(error);
  }
}
