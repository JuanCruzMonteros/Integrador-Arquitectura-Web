import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoMedicoComponent } from './component/listado-medico/listado-medico.component';
import { MedicoService } from './servicios/medico.service';
import { ModalMedicoComponent } from './modales/modal-medico/modal-medico.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ListadoMedicoComponent,
    ModalMedicoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    MedicoService
  ]
})
export class MedicoModule { }
