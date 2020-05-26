import { Component, OnInit } from '@angular/core';
import { UsuarioEntidad } from 'src/app/share/helpers/usuario-entidad';
import { modelPlan } from '../crear-usuario/crear-usuario.component';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { usuariocompleto } from 'src/app/share/models/usuariocompleto';

export interface modelUsuario {
  msj: string;
  data: usuariocompleto;
}

@Component({
  selector: 'app-usuario-show',
  templateUrl: './usuario-show.component.html',
  styleUrls: ['./usuario-show.component.css']
})
export class UsuarioShowComponent implements OnInit {
  datos: modelUsuario;
  usuario: usuariocompleto;
  error: any;
  constructor(
    private gService: GenericService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getUsuario(id);
  }

  getUsuario(id: number) {
    this.gService.get('gym/user/usu', usuariocompleto, id).subscribe(
      (respuesta: modelUsuario) => {
        this.datos = respuesta;
        this.usuario = this.datos.data[0];
      },
      error => (this.error = error)
    );
  }

  regresar(): void {
    this.router.navigate(['/usuario']);
  }

}
