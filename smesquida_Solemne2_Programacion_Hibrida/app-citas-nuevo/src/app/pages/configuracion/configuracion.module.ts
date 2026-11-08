import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfiguracionPageRoutingModule } from './configuracion-routing.module';
import { ConfiguracionPage } from './configuracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConfiguracionPageRoutingModule
  ],
  declarations: [ConfiguracionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConfiguracionPageModule {}