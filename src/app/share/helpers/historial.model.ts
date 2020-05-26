import { PlanModel } from './plan.model';

export class HistorialModel
{
  id?: number;
  nombre?: string;
  descripcion?: string;
  precio?: number;
  usuario_id?:number;
  plan_id?:number;
  fecha_inicio?: Date;
  fecha_final?: Date;
  vigente?: number;
  created_at: Date;
  updated_at: Date;
  plan?: PlanModel;

  // tslint:disable-next-line: max-line-length
  constructor(id?: number, nombre?: string, descripcion?: string, precio?: number, usuario_id?: number, plan_id?: number, fecha_inicio?: Date, fecha_final?: Date, vigente?: number){
  this.id = id;
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.precio = precio;
  this.usuario_id = usuario_id;
  this.plan_id = plan_id;
  this.fecha_inicio = fecha_inicio;
  this.fecha_final = fecha_final;
  this.vigente = vigente;
  }
}
