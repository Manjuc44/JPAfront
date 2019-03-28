import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocionRoutingModule } from './pocion-routing.module';
import { PocionDetailComponent } from './pocion-detail/pocion-detail.component';
import { PocionGridComponent } from './pocion-grid/pocion-grid.component';
import { PocionListComponent } from './pocion-list/pocion-list.component';
import { PocionFormComponent } from './pocion-form/pocion-form.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  declarations: [PocionDetailComponent, PocionGridComponent, PocionListComponent, PocionFormComponent],
  imports: [
    CommonModule,
    PocionRoutingModule,
    FormsModule
  ],
  exports: [PocionGridComponent]
})
export class PocionModule { }
