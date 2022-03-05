import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'one',
    loadChildren: () => import('./one/one.module').then((m) => m.OneModule),
  },
  {
    path: 'two',
    loadChildren: () => import('./two/two.module').then((m) => m.TwoModule),
  },
  {
    path: 'three',
    loadChildren: () => import('./three/three.module').then((m) => m.ThreeModule),
  },
  {
    path: 'four',
    loadChildren: () => import('./four/four.module').then((m) => m.FourModule),
  },
  {
    path: 'five',
    loadChildren: () => import('./five/five.module').then((m) => m.FiveModule),
  },
  {
    path: 'six',
    loadChildren: () => import('./six/six.module').then((m) => m.SixModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
