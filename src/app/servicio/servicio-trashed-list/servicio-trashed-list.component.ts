import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioModel } from 'src/app/share/helpers/servicio.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/share/authentication.service';
import { NotificacionService } from 'src/app/share/notificacion.service';

export interface modelServicio {
  msj: string;
  data: ServicioModel[];
}
@Component({
  selector: 'app-servicio-trashed-list',
  templateUrl: './servicio-trashed-list.component.html',
  styleUrls: ['./servicio-trashed-list.component.css']
})
export class ServicioTrashedListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns = [
    'nombre',
    'descripcion',
    'restaurar'
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
      this.notificacion.msjSuccess('Servicio restaurado!', 'Borar Servicio');
    }
  }
  listaServicio() {
    this.gService.list('gym/serv/trashed', ServicioModel).subscribe(
      (respuesta: modelServicio) => {
        (this.datos = respuesta), (this.dataSource.data = this.datos.data);
        console.log(respuesta);
      },
      error => (this.error = error)
    );
  }
  resServicio(id: number) {
    this.router.navigate(['/serviciotr', id], {
      relativeTo: this.route
    });
  }

}
