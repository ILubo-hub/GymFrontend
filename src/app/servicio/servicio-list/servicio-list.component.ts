import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioModel } from 'src/app/share/helpers/servicio.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { modelPlan } from 'src/app/usuario/crear-usuario/crear-usuario.component';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';

export interface modelServicio {
  msj: string;
  data: ServicioModel[];
}

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns = [
    'nombre',
    'descripcion',
    'tipo_servicio',
    'eliminar'
  ];
  datos: modelServicio;
  plan: ServicioModel;
  currentUser: UsuarioLogin;
  dataSource = new MatTableDataSource<ServicioModel>();
  error: any;
  submitted: boolean;
  formCrear: any;
  infoPlan: ServicioModel;
  constructor(
    private gService: GenericService,
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
    this.mensajes();
    this.listaServicio();
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
      this.notificacion.msjSuccess('Servicio creado!', 'Crear Servicio');
    }
  }
  listaServicio() {
    this.gService.list('gym/serv', ServicioModel).subscribe(
      (respuesta: modelServicio) => {
        (this.datos = respuesta), (this.dataSource.data = this.datos.data);
        console.log(respuesta);
      },
      error => (this.error = error)
    );
  }
  delServicio(id: number) {
    this.router.navigate(['/servicio', id], {
      relativeTo: this.route
    });
  }


}
