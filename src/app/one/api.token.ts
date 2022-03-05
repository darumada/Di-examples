import { InjectionToken } from '@angular/core';

export const API_TOKEN = new InjectionToken<string>('API_TOKEN', {
  providedIn: 'root',
  factory: () => 'api/v1'
});
