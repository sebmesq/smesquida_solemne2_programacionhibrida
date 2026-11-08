import { Component, OnInit } from '@angular/core';
import { Cita } from '../../models/cita.model';
import { CitasService } from '../../services/citas';
import { ConfiguracionService } from '../../services/configuracion';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: false
})
export class GestionCitasPage implements OnInit {
  titulo: string = '';
  autor: string = '';
  citas: Cita[] = [];
  permitirBorrar: boolean = true;

  constructor(
    private citasService: CitasService,
    private configuracionService: ConfiguracionService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.cargarCitas();
    this.permitirBorrar = this.configuracionService.getBorrarCitasPermitido();
  }

  cargarCitas() {
    this.citas = this.citasService.getCitas();
  }

  agregarCita() {
    // Validamos asegurándonos de limpiar espacios y verificar strings válidos
    const t = (this.titulo || '').trim();
    const a = (this.autor || '').trim();

    if (t.length >= 5 && a.length >= 2) {
      this.citasService.agregarCita({
        titulo: t,
        autor: a
      });
      this.titulo = '';
      this.autor = '';
      this.cargarCitas();
      alert('¡Cita agregada con éxito!');
    } else {
      alert(`El título debe tener al menos 5 caracteres (actual: ${t.length}) y el autor al menos 2 (actual: ${a.length}).`);
    }
  }

  eliminarCita(id: string | undefined) {
    if (id) {
      this.citasService.eliminarCita(id);
      this.cargarCitas();
    }
  }
}