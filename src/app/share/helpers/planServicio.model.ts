export class PlanServicioModel
{
  id: number;
  servicio_id: number;
  plan_id: number;
  created_at:Date;
  updated_at:Date;

  constructor(id: number, servicio_id: number, plan_id: number){
    this.id = id;
    this.servicio_id = servicio_id;
    this.plan_id = plan_id;
  }
}
