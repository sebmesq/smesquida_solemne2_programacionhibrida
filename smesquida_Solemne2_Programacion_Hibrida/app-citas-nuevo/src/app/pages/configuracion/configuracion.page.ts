import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from '../../services/configuracion';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: false
})
export class ConfiguracionPage implements OnInit {
  permitirBorrar: boolean = true;

  constructor(private configuracionService: ConfiguracionService) { }

  ngOnInit() {
    this.permitirBorrar = this.configuracionService.getBorrarCitasPermitido();
  }

  cambioPermiso(event: any) {
    this.configuracionService.setBorrarCitasPermitido(event.detail.checked);
  }
}