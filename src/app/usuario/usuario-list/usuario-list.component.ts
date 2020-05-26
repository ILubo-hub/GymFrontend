import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioEntidad } from 'src/app/share/helpers/usuario-entidad';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { modelPlan } from '../crear-usuario/crear-usuario.component';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';

export interface modelUsuario {
  msj: string;
  data: UsuarioEntidad[];
}

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns = [
    'numero_cedula',
    'nombre',
    'apellidos',
    'email',
    'detalle',
    'actualizar',
  ];
  datos: modelUsuario;
  usuario: UsuarioEntidad;
  dataSource = new MatTableDataSource<UsuarioEntidad>();
  error: any;
  constructor(
    private gService: GenericService,
    private route: ActivatedRoute,
    private router: Router,
    private notificacion: NotificacionService
  ) {}

  ngOnInit() {
    this.mensajes();
    this.listaUsuario();
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
      this.notificacion.msjSuccess('Usuario Creado!', 'Crear Lugar');
    }
  }

  listaUsuario() {
    this.gService.list('gym/user', UsuarioEntidad).subscribe(
      (respuesta: modelUsuario) => {
        (this.datos = respuesta), (this.dataSource.data = this.datos.data);
        console.log(respuesta);
      },
      error => (this.error = error)
    );
  }

  detalleLugar(id: number) {
    this.router.navigate(['/usuario/', id], {
      relativeTo: this.route
    });
  }

  actualizarUsuario(id: number) {
    this.router.navigate(['/usuario/update', id], {
      relativeTo: this.route
    });
  }

}
