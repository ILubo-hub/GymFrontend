import { UsuarioEntidad } from '../helpers/usuario-entidad';

export class PagoModel
{
  usuario_id?: number;
  fecha_pago?: Date;
  monto?: number;
  usuario_registra_id?: number;
  usuario?: UsuarioEntidad;

  constructor(usuario_id?: number, fecha_pago?: Date, monto?: number, usuario_registra_id?: number){
    this.usuario_id = usuario_id;
    this.fecha_pago = fecha_pago;
    this.monto = monto;
    this.usuario_registra_id = usuario_registra_id;
  }
}
