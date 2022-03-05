import { InjectionToken } from '@angular/core';

export const MODAL_REF = new InjectionToken<AbstractModal>('MODAL_REF');

export abstract class AbstractModal {
  abstract isOpen: boolean;
  open() {};
  close() {};
}
