import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserEntidad } from 'src/app/share/models/user-entidad';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { GenericService } from 'src/app/share/generic.service';
import { ServicioModel } from 'src/app/share/helpers/servicio.model';
import { PlanServicioModel } from 'src/app/share/helpers/planServicio.model';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { UsuarioEntidad } from 'src/app/share/helpers/usuario-entidad';

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

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuario: UsuarioEntidad;
  planList: modelPlan;
  servicioList: modelServicio;
  datos: UsuarioEntidad;
  error: any;
  formCreate: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private servicioG: GenericService,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) {
    this.reactiveForm();
  }
  ngOnInit(): void {

  }
  getPlanes() {
    return this.servicioG.list('gym/plan', PlanModel).subscribe(
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
  getServicios() {
    return this.servicioG.list('gym/serv', ServicioModel).subscribe(
      (respuesta: modelServicio) =>
        (this.servicioList = respuesta),
      error => {
        this.error = error;
        this.notificacion.msjError(this.error);
      }
    );
  }
  reactiveForm() {
    /*https://angular.io/guide/reactive-forms
     https://angular.io/api/forms/Validators */
    this.formCreate = this.fb.group({
      numero_cedula: ['', [Validators.required, Number]],
      nombre: ['', [Validators.required, String]],
      apellidos: ['', [Validators.required, String]],
      email: ['', [Validators.required, Validators.email]],
      sexo: ['', [Validators.required, String]],
      telefono: ['', [Validators.required, String]],
      fecha_nacimiento: ['', [Validators.required, Date]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      tipo_usuario_id: 3,
      plan_id: ['', [Validators.required, Number]],
    });
    this.getPlanes();
    this.getServicios();
  }



  submitForm() {
    // suscripción para uso del servicio
    this.auntenticationService.createUser(this.formCreate.value).subscribe(
      (respuesta: UsuarioEntidad) => {
        this.datos = respuesta,
          this.router.navigate(['/usuario/login'], {
            queryParams: { register: 'true' }
          });
      },

      error => {
        this.error = error;
        this.notificacion.msjValidacion(this.error);
      },
    );
  }


  onReset() {
    this.formCreate.reset();
  }
  public errorHandling = (control: string, error: string) => {
    return this.formCreate.controls[control].hasError(error);
  }


}
