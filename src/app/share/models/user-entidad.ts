import { PlanModel } from '../helpers/plan.model';

export interface UserEntidad {
  id: number;
  numero_cedula: number;
  nombre: string;
  apellidos: string;
  email: string;
  tipo_usuario_id: number;
  sexo: string;
  telefono: string;
  fecha_nacimiento: Date;
  password: string;
  activo: number;
  plan?: PlanModel;
  remember_token: string;
  deleted_at: Date;
  created_at: Date;
  updated_at: Date;
}
