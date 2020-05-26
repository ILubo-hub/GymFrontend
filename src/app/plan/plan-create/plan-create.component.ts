import { Component, OnInit } from '@angular/core';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { ServicioModel } from 'src/app/share/helpers/servicio.model';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/share/generic.service';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';

export interface modelPlan {
  msj: string;
  data: PlanModel[];
}
export interface modelServicio {
  msj: string;
  data: ServicioModel[];
}

@Component({
  selector: 'app-plan-create',
  templateUrl: './plan-create.component.html',
  styleUrls: ['./plan-create.component.css']
})
export class PlanCreateComponent implements OnInit {
  plan: PlanModel;
  planList: modelPlan;
  servicioList: modelServicio;
  datos: PlanModel;
  infoPlan: modelPlan;
  error: any;
  submitted = false;
  selectable = true;
  formCrear: FormGroup;
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private servicioG: GenericService,
    private auntenticationService: AuthenticationService,
    private notificacion: NotificacionService) {
      this.reactiveForm();
     }

  ngOnInit(): void {
  }

  getServicios() {
    return this.servicioG.list('gym/serv', ServicioModel).subscribe(
      (respuesta: modelServicio) => {
        (this.servicioList = respuesta), (this.checkboxIdiomas());
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
      nombre: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      precio: ['', [Validators.required], Number],
      servicios: this.fb.array([]),
      servicios_id: this.fb.array([])
    });
    this.getServicios();
  }

  get servicios(): FormArray {
    return this.formCrear.get('servicios') as FormArray;
  }
  get servicios_id(): FormArray {
    return this.formCrear.get('servicios_id') as FormArray;
  }
  private checkboxIdiomas() {
    (this.servicioList.data).forEach((o, i) => {
      const control = new FormControl(); // primer parámetro valor a asignar
      (this.formCrear.controls.servicios as FormArray).push(control);
    });
  }
  onCheckChange(event) {
    const formArray: FormArray = this.formCrear.get('servicios') as FormArray;

    /* Selected */
    if (event.checked) {
      // Add a new control in the arrayForm
      (this.formCrear.controls.servicios_id as FormArray).push(new FormControl(event.source.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.source.value) {
          // Remove the unselected element from the arrayForm
          (this.formCrear.controls.servicios_id as FormArray).removeAt(i);
          return;
        }

        i++;
      });
    }
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
    return this.servicioG.create('gym/plan/store', PlanModel, this.formCrear.value).
      subscribe(
        (respuesta: modelPlan) => {
          this.infoPlan = respuesta;
          this.router.navigate(['/plan'], {
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
    this.router.navigate(['/plan']);
  }

}
