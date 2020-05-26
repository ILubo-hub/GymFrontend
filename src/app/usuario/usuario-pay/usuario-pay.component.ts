import { Component, OnInit } from '@angular/core';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { PagoModel } from 'src/app/share/models/pago';

export interface modelPlan {
  msj: string;
  data: PlanModel;
}
export interface modelPago{
  msj: string;
  data: PagoModel;
}

@Component({
  selector: 'app-usuario-pay',
  templateUrl: './usuario-pay.component.html',
  styleUrls: ['./usuario-pay.component.css']
})
export class UsuarioPayComponent implements OnInit {

  datos: modelPlan;
  plan: PlanModel;
  error: any;
  currentUser: UsuarioLogin;
  submitted = false;
  selectable = true;
  infoPago: modelPago;
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
    const id = +this.route.snapshot.paramMap.get('id');
    if ( this.plan ) {
      this.formCrear = this.fb.group({
        usuario_id: [id, [Validators.required]],
        plan_id: [this.plan.id, [Validators.required]],
        usuario_registra_id : [this.currentUser.user.id,  [Validators.required]]
      });
    }

  }

  getPlan(id: number) {
    this.gService.get('gym/plan/showcli', PlanModel, id).subscribe(
      (respuesta: modelPlan) => {
        this.datos = respuesta;
        this.plan = this.datos.data[0];
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
    return this.servicioG.create('gym/pg/pay', PagoModel, this.formCrear.value).
      subscribe(
        (respuesta: modelPago) => {
          this.infoPago = respuesta;
          this.router.navigate(['/usuariocli'], {
            queryParams: { create: 'true' }
          });
        },
        error => {
          this.error = error;
          this.notificacion.msjError(this.error.status === 403 ? 'No tiene un historial activo' : 'Ha ocurrido un error');
        }
      );
  }

}
