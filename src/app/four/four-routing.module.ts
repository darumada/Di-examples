import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourComponent } from './four.component';

const routes: Routes = [
  {
    path: '',
    component: FourComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourRoutingModule { }
