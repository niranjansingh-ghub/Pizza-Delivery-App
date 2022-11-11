import { TestBed } from '@angular/core/testing';

import { Dashboard02Service } from './dashboard02.service';

describe('Dashboard02Service', () => {
  let service: Dashboard02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dashboard02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
