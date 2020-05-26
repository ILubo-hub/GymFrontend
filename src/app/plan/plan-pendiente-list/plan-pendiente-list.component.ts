import { Component, OnInit, ViewChild } from '@angular/core';
import { PagoPendienteModel } from 'src/app/share/models/pago-pendiente';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';
import { PagoModel } from 'src/app/share/models/pago';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';

export interface modelPago {
  msj: string;
  data: PagoPendienteModel[];
}

@Component({
  selector: 'app-plan-pendiente-list',
  templateUrl: './plan-pendiente-list.component.html',
  styleUrls: ['./plan-pendiente-list.component.css']
})
export class PlanPendienteListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns = [
    'nombre',
    'email',
    'fecha_final',
    'nombre_plan',
    'precio',
  ];
  datos: modelPago;
  pago: PagoPendienteModel;
  currentUser: UsuarioLogin;
  dataSource = new MatTableDataSource<PagoPendienteModel>();
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
    this.gService.list('gym/pg/pend', PagoModel).subscribe(
      (respuesta: modelPago) => {
        (this.datos = respuesta), (this.dataSource.data = this.datos.data);
        console.log(respuesta);
      },
      error => (this.error = error)
    );
  }

}
