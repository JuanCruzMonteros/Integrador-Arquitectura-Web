import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LayoutRoutingModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutComponent,
    DashboardComponent,
    MaterialModule
  ]
})
export class SharedModule { }
