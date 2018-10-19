import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ExplRoutingModule } from './expl-routing.module';
import { ExplComponent } from './expl.component';
import { FiltersComponent } from './filters/filters.component';
import { GridComponent } from './grid/grid.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    ExplRoutingModule
  ],
  declarations: [ExplComponent, FiltersComponent, GridComponent, SidebarComponent]
})
export class ExplModule { }
