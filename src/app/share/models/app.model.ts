import { LanguageModel } from './language.model';
import { UserEntidad } from './user-entidad';
import { CategoryModel } from './category.model';

export class AppModel {
  id?: number;
  nombre?: string;
  descripcion?: string;
  edad?: string;
  tamanno?: number;
  comprasApp?: boolean;
  category_id?: number;
  user_id?: number;
  created_at?: Date;
  updated_at?: Date;
  languages?: LanguageModel[];
  user?: UserEntidad;
  category?: CategoryModel;

  constructor(id?: number,
    nombre?: string,
    descripcion?: string,
    edad?: string,
    tamanno?: number,
    comprasApp?: boolean,
    category_id?: number,
    user_id?: number) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.edad = edad;
    this.tamanno = tamanno;
    this.comprasApp = comprasApp;
    this.category_id = category_id;
    this.user_id = user_id;
  }
}
