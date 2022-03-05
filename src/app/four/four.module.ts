import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourRoutingModule } from './four-routing.module';
import { FourComponent } from './four.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalComponent } from './modal/modal.component';
import { NewModalComponent } from './modal-new/modal.component';


@NgModule({
  declarations: [
    FourComponent,
    ModalContentComponent,
    ModalComponent,
    NewModalComponent
  ],
  imports: [
    CommonModule,
    FourRoutingModule
  ]
})
export class FourModule { }
