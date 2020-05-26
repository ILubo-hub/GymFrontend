import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionService } from 'src/app/share/notificacion.service';
import { UsuarioLogin } from 'src/app/share/models/usuarioLogin';
import { AuthenticationService } from 'src/app/share/authentication.service';

export interface modelPlan {
  msj: string;
  data: PlanModel[];
}

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  displayedColumns = [
    'nombre',
    'descripcion',
    'precio',
    'detalle',
  ];
  datos: modelPlan;
  plan: PlanModel;
  currentUser: UsuarioLogin;
  dataSource = new MatTableDataSource<PlanModel>();
  error: any;
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
    this.listaPlan();
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

  listaPlan() {
    this.gService.list('gym/plan', PlanModel).subscribe(
      (respuesta: modelPlan) => {
        (this.datos = respuesta), (this.dataSource.data = this.datos.data);
        console.log(respuesta);
      },
      error => (this.error = error)
    );
  }

  detalleLugar(id: number) {
    this.router.navigate(['/plan/', id], {
      relativeTo: this.route
    });
  }


}
