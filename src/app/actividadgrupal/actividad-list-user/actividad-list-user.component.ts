import { Component, OnInit, ViewChild } from '@angular/core';
import { ActividadGrupalModel } from 'src/app/share/models/actividadgrupal.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { UsuarioEntidad } from 'src/app/share/helpers/usuario-entidad';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';

export interface modelActividad {
  msj: string;
  data: ActividadGrupalModel[];
}

@Component({
  selector: 'app-actividad-list-user',
  templateUrl: './actividad-list-user.component.html',
  styleUrls: ['./actividad-list-user.component.css']
})
export class ActividadListUserComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns = [
    'fecha',
    'hora_inicio',
    'hora_final',
    'cupo',
    'detalle',
    'cancelar',
  ];
  currentUser: UsuarioLogin;
  datos: modelActividad;
  actividad: ActividadGrupalModel;
  dataSource = new MatTableDataSource<ActividadGrupalModel>();
  error: any;
  constructor(
    private gService: GenericService,
    private route: ActivatedRoute,
    private router: Router,
    private notificacion: NotificacionService,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );

  }

  ngOnInit() {
    this.mensajes();
    this.listaActividad();
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
      this.notificacion.msjSuccess('Realizado con éxito!', 'Actividad');
    }
  }

  listaActividad() {
    this.gService.get('gym/acgr/ac', ActividadGrupalModel, this.currentUser.user.id).subscribe(
      (respuesta: modelActividad) => {
        (this.datos = respuesta), (this.dataSource.data = this.datos.data);
        console.log(respuesta);
      },
      error => (this.error = error)
    );
  }

  detalleActividad(id: number) {
    this.router.navigate(['/actividadus/', id], {
      relativeTo: this.route
    });
  }

  cancelarActividad(id: number) {
    this.router.navigate(['/actividadus/out', id], {
      relativeTo: this.route
    });
  }

}
