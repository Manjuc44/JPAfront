import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RazaListComponent } from './raza-list/raza-list.component';

const routes: Routes = [
  {path: 'razas', component: RazaListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RazaRoutingModule { }
