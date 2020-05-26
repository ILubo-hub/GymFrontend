import { Component, OnInit } from '@angular/core';
import { ActividadGrupalModel } from 'src/app/share/models/actividadgrupal.model';
import { ServicioModel } from 'src/app/share/helpers/servicio.model';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { modelPlan } from 'src/app/usuario/crear-usuario/crear-usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/app/share/generic.service';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { ServicioModule } from 'src/app/servicio/servicio.module';

export interface modelActividad {
  msj: string;
  data: ActividadGrupalModel[];
}
export interface modelServicio {
  msj: string;
  data: ServicioModel[];
}

@Component({
  selector: 'app-actividad-create',
  templateUrl: './actividad-create.component.html',
  styleUrls: ['./actividad-create.component.css']
})
export class ActividadCreateComponent implements OnInit {
  actividad: ActividadGrupalModel;
  servicioList: modelServicio;
  datos: ActividadGrupalModel;
  infoActividad: modelActividad;
  error: any;
  submitted = false;
  selectable = true;
  formCrear: FormGroup;
  minDate = new Date();
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private servicioG: GenericService,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService) {
      this.reactiveForm();
      this.minDate.setDate(this.minDate.getDate() + 1 );
     }

  ngOnInit() {
  }


  getServicios() {
    return this.servicioG.list('gym/serv/grp', ServicioModule).subscribe(
      (respuesta: modelServicio) => {
        (this.servicioList = respuesta);
        console.log(respuesta);
      },
      error => {
        this.error = error;
        this.notificacion.msjError(this.error);
      }
    );
  }


  reactiveForm() {
    /*https://angular.io/guide/reactive-forms
     https://angular.io/api/forms/Validators */


    this.formCrear = this.fb.group({
      fecha: ['', [Validators.required]],
      hora_inicial: ['', [Validators.required] || [Validators.min(7)] || [Validators.max(16)]],
      cupo: ['', [Validators.required] || [Validators.max(20)]],
      servicio_id: ['', [Validators.required]],
    });


    this.getServicios();
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
    return this.servicioG.create('gym/acgr/store', ActividadGrupalModel, this.formCrear.value).
      subscribe(
        (respuesta: modelActividad) => {
          this.infoActividad = respuesta;
          this.router.navigate(['/actividad'], {
            queryParams: { create: 'true' }
          });

        },
        error => {
          this.error = error;
          this.notificacion.msjError(this.error.status === 403 ? 'Ya hay una actividad a esta hora' : 'Ha ocurrido un error');
        }
      );

  }

  onReset() {
    this.submitted = false;
    this.formCrear.reset();
  }
  onBack() {
    this.router.navigate(['/actividad']);
  }


}
