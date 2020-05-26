import { Component, OnInit, ViewChild } from '@angular/core';
import { ActividadGrupalModel } from 'src/app/share/models/actividadgrupal.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';

export interface modelActividad {
  msj: string;
  data: ActividadGrupalModel[];
}

@Component({
  selector: 'app-actividad-list',
  templateUrl: './actividad-list.component.html',
  styleUrls: ['./actividad-list.component.css']
})
export class ActividadListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns = [
    'nombre',
    'fecha',
    'hora_inicio',
    'hora_final',
    'cupo',
  ];
  datos: modelActividad;
  actividad: ActividadGrupalModel;
  dataSource = new MatTableDataSource<ActividadGrupalModel>();
  error: any;
  constructor(
    private gService: GenericService,
    private route: ActivatedRoute,
    private router: Router,
    private notificacion: NotificacionService
  ) {}

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
      this.notificacion.msjSuccess('Actividad creada!', 'Crear Actividad');
    }
  }

  listaActividad() {
    this.gService.list('gym/acgr', ActividadGrupalModel).subscribe(
      (respuesta: modelActividad) => {
        (this.datos = respuesta), (this.dataSource.data = this.datos.data);
        console.log(respuesta);
      },
      error => (this.error = error)
    );
  }


}
