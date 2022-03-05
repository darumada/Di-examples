import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeRoutingModule } from './three-routing.module';
import { ThreeComponent } from './three.component';
import { ModalComponent } from './modal/modal.component';
import { ModalContentComponent } from './modal-content/modal-content.component';


@NgModule({
  declarations: [
    ThreeComponent,
    ModalComponent,
    ModalContentComponent
  ],
  imports: [
    CommonModule,
    ThreeRoutingModule
  ]
})
export class ThreeModule { }
