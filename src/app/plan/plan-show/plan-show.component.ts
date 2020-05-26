import { Component, OnInit } from '@angular/core';
import { PlanModel } from 'src/app/share/helpers/plan.model';
import { GenericService } from 'src/app/share/generic.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface modelPlan {
  msj: string;
  data: PlanModel;
}

@Component({
  selector: 'app-plan-show',
  templateUrl: './plan-show.component.html',
  styleUrls: ['./plan-show.component.css']
})
export class PlanShowComponent implements OnInit {
  datos: modelPlan;
  plan: PlanModel;
  error: any;
  constructor(
    private gService: GenericService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPlan(id);
  }

  getPlan(id: number) {
    this.gService.get('gym/plan/show', PlanModel, id).subscribe(
      (respuesta: modelPlan) => {
        this.datos = respuesta;
        this.plan = this.datos.data;
      },
      error => (this.error = error)
    );
  }
  regresar(): void {
    this.router.navigate(['/plan']);
  }
}
