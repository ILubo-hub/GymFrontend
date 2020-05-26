import { Component, OnInit, ViewChild } from '@angular/core';
import { PagoModel } from 'src/app/share/models/pago';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { modelPlan } from 'src/app/usuario/crear-usuario/crear-usuario.component';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';

export interface modelPago {
  msj: string;
  data: PagoModel[];
}

@Component({
  selector: 'app-plan-pagado-list',
  templateUrl: './plan-pagado-list.component.html',
  styleUrls: ['./plan-pagado-list.component.css']
})
export class PlanPagadoListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns = [
    'cliente',
    'fecha',
    'monto',
    'usuario_registra_id',
  ];
  datos: modelPago;
  pago: PagoModel;
  currentUser: UsuarioLogin;
  dataSource = new MatTableDataSource<PagoModel>();
  error: any;
  constructor(
    private gService: GenericService,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificacion: NotificacionService
  ) { }

  ngOnInit() {
    this.mensajes();
    this.listaPago();

  }

  mensajes() {
    let notifC = false;
    let notifM = false;
    // Mensajes
    this.route.queryParams.subscribe(params => {
      notifC = params.create || false;
      notifM = params.update || false;
    });
    if (notifC) {
      this.notificacion.msjSuccess('Plan creado!', 'Crear Lugar');
    }
  }

  listaPago() {
    this.gService.list('gym/pg', PagoModel).subscribe(
      (respuesta: modelPago) => {
        (this.datos = respuesta), (this.dataSource.data = this.datos.data);
        console.log(respuesta);
      },
      error => (this.error = error)
    );
  }

}
