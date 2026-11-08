import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GestionCitasPageRoutingModule } from './gestion-citas-routing.module';
import { GestionCitasPage } from './gestion-citas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GestionCitasPageRoutingModule
  ],
  declarations: [GestionCitasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionCitasPageModule {}