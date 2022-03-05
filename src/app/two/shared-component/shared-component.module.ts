import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentComponent } from './shared-component.component';



@NgModule({
  declarations: [
    SharedComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SharedComponentComponent
  ]
})
export class SharedComponentModule { }
