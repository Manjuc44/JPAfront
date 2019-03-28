import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocionGridComponent } from './pocion-grid/pocion-grid.component';
import { PocionListComponent } from './pocion-list/pocion-list.component';
import { PocionDetailComponent } from './pocion-detail/pocion-detail.component';
import { PocionFormComponent } from './pocion-form/pocion-form.component';

const routes: Routes = [
  {path:"pociones", component:PocionListComponent},
  //{path:"pociones/:id", component:PocionDetailComponent},
  {path:"pociones/crear/:id", component:PocionFormComponent},
  {path:"pociones/:id", component:PocionDetailComponent}

 // {path:"pociones/editar/:id", component:PocionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PocionRoutingModule { }
