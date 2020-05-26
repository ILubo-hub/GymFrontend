import { Component, OnInit } from '@angular/core';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';
import { modelActividad } from 'src/app/actividadgrupal/actividad-create/actividad-create.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { ActividadGrupalUsuarioModel } from 'src/app/share/models/actividadGrupal-Usuario';

export interface modelPlan {
  msj: string;
  data: PlanModel;
}
@Component({
  selector: 'app-plan-pay',
  templateUrl: './plan-pay.component.html',
  styleUrls: ['./plan-pay.component.css']
})
export class PlanPayComponent implements OnInit {
  datos: modelPlan;
  plan: PlanModel;
  error: any;
  currentUser: UsuarioLogin;
  submitted = false;
  selectable = true;
  infoPlan: modelPlan;
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
    this.getPlan(id);
  }

  reactiveForm() {
    if ( this.plan ) {
      this.formCrear = this.fb.group({
        usuario_id: [this.currentUser.user.id, [Validators.required]],
        plan_id: [this.plan.id, [Validators.required]],
      });
    }

  }

  getPlan(id: number) {
    this.gService.get('gym/plan/showcli', PlanModel, id).subscribe(
      (respuesta: modelPlan) => {
        this.datos = respuesta;
        this.plan = this.datos[1].data;
        this.reactiveForm();
      },
      error => (this.error = error)
    );
  }

  regresar(): void {
    this.router.navigate(['/plan']);
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
    return this.servicioG.create('gym/plan/pay', PlanModel, this.formCrear.value).
      subscribe(
        (respuesta: modelPlan) => {
          this.infoPlan = respuesta;
          this.router.navigate(['/plan'], {
            queryParams: { create: 'true' }
          });
        },
        error => {
          this.error = error;
          this.notificacion.msjError(this.error.status === 403 ? 'No tiene un plan activo' : 'Ha ocurrido un error');
        }
      );
  }

}
