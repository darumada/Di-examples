import { Injectable } from '@angular/core';
import { SharedComponentService } from '../shared-component/shared-component.service';

@Injectable()
export class AService extends SharedComponentService{
  title = 'A компонент';
}
