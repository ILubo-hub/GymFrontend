import { ServicioModel } from './servicio.model';

export class PlanModel {
  id: number;
  nombre?: string;
  descripcion?: string;
  precio?: number;
  servicios?: ServicioModel[];
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;

  constructor(
    id?: number,
    nombre?: string,
    descripcion?: string,
    precio?: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}
