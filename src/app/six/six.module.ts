import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SixRoutingModule } from './six-routing.module';
import { SixComponent } from './six.component';
import { InputModule } from '@b-ui/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from '@b-ui/select';
import { DatepickerModule } from '@b-ui/datepicker';
import { ControlWrapperModule } from '@b-ui/control-wrapper';


@NgModule({
  declarations: [
    SixComponent
  ],
  imports: [
    CommonModule,
    SixRoutingModule,
    InputModule,
    ReactiveFormsModule,
    SelectModule,
    DatepickerModule,
    ControlWrapperModule,
  ],
})
export class SixModule { }
