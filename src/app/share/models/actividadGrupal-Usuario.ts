export class ActividadGrupalUsuarioModel{
  id?: number;
  usuario_id?: number;
  actividad_grupal_id?: number;

  constructor(id?: number, usuario_id?: number, actividad_grupal_id?: number){
    this.id = id;
    this.usuario_id = usuario_id;
    this.actividad_grupal_id = actividad_grupal_id;
  }
}
