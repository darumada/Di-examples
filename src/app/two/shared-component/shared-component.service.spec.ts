import { TestBed } from '@angular/core/testing';

import { SharedComponentService } from './shared-component.service';

describe('SharedComponentService', () => {
  let service: SharedComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
