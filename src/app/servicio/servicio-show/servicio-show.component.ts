import { Component, OnInit } from '@angular/core';
import { ServicioModel } from 'src/app/share/helpers/servicio.model';
import { modelPlan } from 'src/app/usuario/crear-usuario/crear-usuario.component';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NotificacionService } from 'src/app/share/notificacion.service';

export interface modelServicio {
  msj: string;
  data: ServicioModel;
}

@Component({
  selector: 'app-servicio-show',
  templateUrl: './servicio-show.component.html',
  styleUrls: ['./servicio-show.component.css']
})
export class ServicioShowComponent implements OnInit {
  datos: modelServicio;
  servicio: ServicioModel;
  submitted = false;
  selectable = true;
  infoServicio: ServicioModel;
  formCrear: FormGroup;
  error: any;
  constructor(
    public fb: FormBuilder,
    private gService: GenericService,
    private route: ActivatedRoute,
    private router: Router,
    private notificacion: NotificacionService
  ) {
    this.reactiveForm();
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getServicio(id);
  }

  reactiveForm() {
    /*https://angular.io/guide/reactive-forms
     https://angular.io/api/forms/Validators */
     const id = +this.route.snapshot.paramMap.get('id');

    // tslint:disable-next-line: align
    this.formCrear = this.fb.group({
      id: [id, [Validators.required]],
    });


  }
  getServicio(id: number) {
    this.gService.get('gym/serv/shid', ServicioModel, id).subscribe(
      (respuesta: modelServicio) => {
        this.datos = respuesta;
        this.servicio = this.datos.data;
      },
      error => (this.error = error)
    );
  }

  submitForm() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formCrear.invalid) {
      return;
    }
    console.log(this.formCrear.value);
    return this.gService.create('gym/serv/delete', ServicioModel, this.formCrear.value).
      subscribe(
        (respuesta: ServicioModel) => {
          this.infoServicio = respuesta;
          this.router.navigate(['/servicio'], {
            queryParams: { create: 'true' }
          });
        },
        error => {
          this.error = error;
          this.notificacion.msjValidacion(this.error.status === 202 ? 'Eliminado con éxito' : 'Ocurrió un error');
        }
      );

  }
  regresar(): void {
    this.router.navigate(['/servicio']);
  }


}
