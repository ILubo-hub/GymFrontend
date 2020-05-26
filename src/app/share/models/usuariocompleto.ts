export class usuariocompleto{
  id?: number;
  numero_cedula?: number;
  nombre?: string;
  apellidos?: string;
  email?: string;
  tipo_usuario_id?: number;
  sexo?: string;
  telefono?: string;
  fecha_nacimiento?: Date;
  password?: string;
  activo?: number;
  deleted_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  usuario_id?: number;
  plan_id?: number;
  fecha_inicio?: Date;
  fecha_final?: Date;
  vigente?: number;
  nombre_plan?: string;
  descripcion?: string;
  precio?: number;

  costructor(
    id?: number,
  numero_cedula?: number,
  nombre?: string,
  apellidos?: string,
  email?: string,
  tipo_usuario_id?: number,
  sexo?: string,
  telefono?: string,
  fecha_nacimiento?: Date,
  password?: string,
  activo?: number,
  usuario_id?: number,
  plan_id?: number,
  fecha_inicio?: Date,
  fecha_final?: Date,
  vigente?: number,
  nombre_plan?: string,
  descripcion?: string,
  precio?: number,
  ){
    this.id = id;
    this.numero_cedula = numero_cedula;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.tipo_usuario_id = tipo_usuario_id;
    this.sexo = sexo;
    this.telefono = telefono;
    this.fecha_nacimiento = fecha_nacimiento;
    this.password = password;
    this.plan_id = plan_id;
    this.activo = activo;
    this.usuario_id = usuario_id;
    this.fecha_inicio = fecha_inicio;
    this.fecha_final = fecha_final;
    this.vigente = vigente;
    this.descripcion = descripcion;
    this.precio = precio;
    this.nombre_plan = nombre_plan;
  }

}
