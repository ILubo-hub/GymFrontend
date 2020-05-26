export class LanguageModel {
  id: number;
  nombre?: string;
  descripcion?: string;
  created_at?: Date;
  updated_at?: Date;

  constructor(id: number,
    nombre?: string,
    descripcion?: string) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}
