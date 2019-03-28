import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RazaRoutingModule } from './raza-routing.module';
import { RazaListComponent } from './raza-list/raza-list.component';
import { RazaCardComponent } from './raza-card/raza-card.component';
import { RazaDetailComponent } from './raza-detail/raza-detail.component';

@NgModule({
  declarations: [RazaListComponent, RazaCardComponent, RazaDetailComponent],
  imports: [
    CommonModule,
    RazaRoutingModule
  ]
})
export class RazaModule { }
