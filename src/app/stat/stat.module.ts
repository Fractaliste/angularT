import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatRoutingModule } from './stat-routing.module';
import { StatComponent } from './stat.component';

@NgModule({
  imports: [
    CommonModule,
    StatRoutingModule
  ],
  declarations: [StatComponent]
})
export class StatModule { }
