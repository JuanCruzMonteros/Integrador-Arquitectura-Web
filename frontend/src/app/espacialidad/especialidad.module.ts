import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { EspecialidadService } from './servicios/especialidad.service';
import { ListadoEspecialidadComponent } from './pages/listado-especialidad/listado-especialidad.component';
import { ModalEspecialidadComponent } from './modales/modal-especialidad/modal-especialidad.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListadoEspecialidadComponent,
    ModalEspecialidadComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    EspecialidadService
  ],
})
export class EspecialidadModule {}
