import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  private permitirBorrar: boolean = true;

  constructor() { }

  getBorrarCitasPermitido(): boolean {
    return this.permitirBorrar;
  }

  setBorrarCitasPermitido(valor: boolean) {
    this.permitirBorrar = valor;
  }
}