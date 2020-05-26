import { HistorialModel } from './historial.model';

export class UsuarioEntidad {
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
  plan_id?: number;
  historiales: HistorialModel[];
  deleted_at: Date;
  created_at: Date;
  updated_at: Date;

  constructor(
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
    plan_id?: number
  ) {
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
  }
}
