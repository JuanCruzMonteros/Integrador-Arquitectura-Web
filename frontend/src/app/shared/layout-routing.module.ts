import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListadoEspecialidadComponent } from '../especialidad/pages/listado-especialidad/listado-especialidad.component';
import { ListadoMedicoComponent } from '../medico/component/listado-medico/listado-medico.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    {
      path: 'dashboard', component: DashboardComponent, pathMatch: 'full'
    },
    {
      path: 'especialidades', component: ListadoEspecialidadComponent, pathMatch: 'full'
    },
    {
      path: 'medicos', component: ListadoMedicoComponent,   pathMatch: 'full',
    },
    {
      path: '**', redirectTo: '', pathMatch: 'full'
    }
  ]
}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
