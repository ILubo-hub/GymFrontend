import { ServicioModel } from '../helpers/servicio.model';

export class ActividadGrupalModel
{
  id?: number;
  servicio_id?: number;
  fecha?: Date;
  hora_inicial?: number;
  hora_final?: number;
  cupo?: number;
  servicio?: ServicioModel;

  constructor(
    id?: number,
    servicio_id?: number,
    fecha?: Date,
    hora_inicial?: number,
    hora_final?: number,
    cupo?: number
  )
  {
    this.id = id;
    this.servicio_id = servicio_id;
    this.fecha = fecha;
    this.hora_inicial = hora_inicial;
    this.hora_final = hora_final;
    this.cupo = cupo;
  }

}
