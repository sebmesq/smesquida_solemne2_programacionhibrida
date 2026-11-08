import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: Cita[] = [
    { id: '1', titulo: 'La vida es bella y hay que vivirla', autor: 'Anónimo' },
    { id: '2', titulo: 'El conocimiento es poder', autor: 'Francis Bacon' }
  ];

  constructor() {}

  getCitas(): Cita[] {
    return this.citas;
  }

  agregarCita(cita: Cita) {
    cita.id = new Date().getTime().toString();
    this.citas.push(cita);
  }

  eliminarCita(id: string) {
    this.citas = this.citas.filter(c => c.id !== id);
  }
}