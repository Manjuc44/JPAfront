import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocionRoutingModule } from './pocion-routing.module';
import { PocionDetailComponent } from './pocion-detail/pocion-detail.component';
import { PocionGridComponent } from './pocion-grid/pocion-grid.component';

@NgModule({
  declarations: [PocionDetailComponent, PocionGridComponent],
  imports: [
    CommonModule,
    PocionRoutingModule
  ]
})
export class PocionModule { }
