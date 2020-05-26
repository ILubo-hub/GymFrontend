import { Component, OnInit } from '@angular/core';
import { ActividadGrupalModel } from 'src/app/share/models/actividadgrupal.model';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { ActividadGrupalUsuarioModel } from 'src/app/share/models/actividadGrupal-Usuario';

export interface modelActividad {
  msj: string;
  data: ActividadGrupalModel;
}

@Component({
  selector: 'app-actividad-getout',
  templateUrl: './actividad-getout.component.html',
  styleUrls: ['./actividad-getout.component.css']
})
export class ActividadGetoutComponent implements OnInit {
  datos: modelActividad;
  actividad: ActividadGrupalModel;
  error: any;
  currentUser: UsuarioLogin;
  submitted = false;
  selectable = true;
  infoActividad: modelActividad;
  formCrear: FormGroup;
  constructor(
    public fb: FormBuilder,
    private gService: GenericService,
    private servicioG: GenericService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getActividad(id);
  }
  reactiveForm() {
    if ( this.actividad ) {
      this.formCrear = this.fb.group({
        usuario_id: [this.currentUser.user.id, [Validators.required]],
        actividad_grupal_id: [this.actividad.id, [Validators.required]],
      });
    }
  }
  getActividad(id: number) {
    this.gService.get('gym/acgr/actv', ActividadGrupalModel, id).subscribe(
      (respuesta: modelActividad) => {
        this.datos = respuesta;
        this.actividad = this.datos.data;
        this.reactiveForm();
      },
      error => (this.error = error)
    );
  }
  regresar(): void {
    this.router.navigate(['/actividadus']);
  }
  public errorHandling = (control: string, error: string) => {
    return this.formCrear.controls[control].hasError(error);
  }
  submitForm() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formCrear.invalid) {
      return;
    }
    console.log(this.formCrear.value);
    return this.servicioG.create('gym/acgr/out', ActividadGrupalUsuarioModel, this.formCrear.value).
      subscribe(
        (respuesta: modelActividad) => {
          this.infoActividad = respuesta;
          this.router.navigate(['/actividadus'], {
            queryParams: { create: 'true' }
          });
        },
        error => {
          this.error = error;
          // tslint:disable-next-line: max-line-length
          this.notificacion.msjError(this.error.status === 403 ? 'Usted no está suscrito a esa actividad' : this.error.status === 402 ? 'No puede cancelarlo a 4 horas o menos de tiempo' : 'Ha ocurrido un error, puede que la actividad ya haya pasado');
        }
      );
  }

}
