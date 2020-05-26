export class PagoPendienteModel
{
  nombre?: string;
  email?: string;
  fecha_final?: Date;
  nombre_plan?: string;
  precio?: number;

  constructor(nombre?: string, email?: string, fecha_final?: Date, nombre_plan?: string, precio?: number)
  {
    this.nombre = nombre;
    this.email = email;
    this.fecha_final = fecha_final;
    this.nombre_plan = nombre_plan;
    this.precio = precio;
  }
}
