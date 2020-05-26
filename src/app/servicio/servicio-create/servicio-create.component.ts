import { Component, OnInit } from '@angular/core';
import { ServicioModel } from 'src/app/share/helpers/servicio.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/share/generic.service';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';

export interface modelServicio {
  msj: string;
  data: ServicioModel[];
}

@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.css']
})
export class ServicioCreateComponent implements OnInit {
  servicio: ServicioModel;
  servicioList: modelServicio;
  datos: ServicioModel;
  infoPlan: ServicioModel;
  error: any;
  submitted = false;
  selectable = true;
  formCrear: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private servicioG: GenericService,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService)
    {
      this.reactiveForm();
    }


  ngOnInit(): void {
  }

  reactiveForm() {
    /*https://angular.io/guide/reactive-forms
     https://angular.io/api/forms/Validators */

    this.formCrear = this.fb.group({
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      tipo_servicio: ['', [Validators.required]],
    });
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
    return this.servicioG.create('gym/serv/store', ServicioModel, this.formCrear.value).
      subscribe(
        (respuesta: ServicioModel) => {
          this.infoPlan = respuesta;
          this.router.navigate(['/servicio'], {
            queryParams: { create: 'true' }
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
    this.formCrear.reset();
  }
  onBack() {
    this.router.navigate(['/servicio']);
  }

}
