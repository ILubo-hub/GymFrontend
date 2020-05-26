import { Component, OnInit } from '@angular/core';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { ServicioModel } from 'src/app/share/helpers/servicio.model';
import { PlanServicioModel } from 'src/app/share/helpers/planServicio.model';
import { UsuarioModule } from '../usuario.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/app/share/generic.service';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { UsuarioEntidad } from 'src/app/share/helpers/usuario-entidad';
import { UserEntidad } from 'src/app/share/models/user-entidad';


export interface modelPlan {
  msj: string;
  data: PlanModel[];
}
export interface modelServicio {
  msj: string;
  data: ServicioModel[];
}
export interface modelServicioPlan {
  msj: string;
  data: PlanServicioModel[];
}
export interface modelServicioPlanAll {
  nombrePlan: string;
  precioPlan: number;
  nombreServicio: string;
  descripcionServicio: string;
  tipoServicio: string;
}
export interface modelUsuario {
  msj: string;
  data: UsuarioEntidad;
}

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {
  datos: modelUsuario;
  usuario: UsuarioEntidad;
  planList: modelPlan;
  infoUser: modelUsuario;

  error: any;
  submitted = false;
  selectable = true;
  formUpdate: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private servicioG: GenericService,
    private notificacion: NotificacionService
  ) {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  ngOnInit(): void {
  }

  getPlanes() {
    this.servicioG.list('gym/plan', PlanModel).subscribe(
      (respuesta: modelPlan) => {
        (this.planList = respuesta);
        console.log(respuesta);
      },
      error => {
        this.error = error;
        this.notificacion.msjError(this.error);
      }
    );
  }

  /*getServicios() {
    return this.servicioG.list('gym/serv', ServicioModel).subscribe(
      (respuesta: modelServicio) => {
        (this.servicioList = respuesta);
        console.log(respuesta);
      },
      error => {
        this.error = error;
        this.notificacion.msjError(this.error);
      }
    );
  }*/


  getUser(id: number) {
    this.servicioG.get('gym/user/shid', UsuarioEntidad, id).subscribe(
      (respuesta: modelUsuario) => {
        this.datos = respuesta;
        this.usuario = this.datos.data;
        console.log(respuesta);
        console.log(this.datos.data);
        this.reactiveForm();
      },
      error => (this.error = error)
    );
  }

  reactiveForm() {
    /*https://angular.io/guide/reactive-forms
     https://angular.io/api/forms/Validators */
     this.getPlanes();
    // tslint:disable-next-line: align
    if ( this.usuario ) {
      this.formUpdate = this.fb.group({
        id: [this.usuario.id],
        nombre: [this.usuario.nombre, [Validators.required]],
        apellidos: [this.usuario.apellidos, [Validators.required]],
        email: [this.usuario.email, [Validators.required, Validators.email]],
        sexo: [this.usuario.sexo, [Validators.required]],
        telefono: [this.usuario.telefono, [Validators.required]],
        fecha_nacimiento: [this.usuario.fecha_nacimiento, [Validators.required]],
        password: [this.usuario.password, [Validators.required, Validators.minLength(6)]],
        plan_id: [this.usuario.plan_id, [Validators.required]],
      });

    }


    // this.getServicios();

  }
  public errorHandling = (control: string, error: string) => {
    return this.formUpdate.controls[control].hasError(error);
  }

  submitForm() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formUpdate.invalid) {
      return;
    }
    console.log(this.formUpdate.value);
    return this.servicioG.update('gym/user/actsr', UsuarioEntidad, this.formUpdate.value).
      subscribe(
        (respuesta: modelUsuario) => {
          this.infoUser = respuesta;
          this.router.navigate(['/plan'], {
            queryParams: { update: 'true' }
          });
        },
        error => {
          this.error = error;
          this.notificacion.msjValidacion(this.error);
        }
      );
  }
  onReset() {
    this.submitted = false;
    this.formUpdate.reset();
  }
  onBack() {
    this.router.navigate(['/plan']);
  }
}
