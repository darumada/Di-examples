import { Injectable } from '@angular/core';
import { SharedComponentService } from '../shared-component/shared-component.service';

@Injectable()
export class BService extends SharedComponentService{

  title = 'B компонент';
}
