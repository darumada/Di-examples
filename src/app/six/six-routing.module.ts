import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SixComponent } from './six.component';

const routes: Routes = [
  {
    path: '',
    component: SixComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SixRoutingModule { }
