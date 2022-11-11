import { TestBed } from '@angular/core/testing';

import { Dashboard2Service } from './dashboard2.service';

describe('Dashboard2Service', () => {
  let service: Dashboard2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dashboard2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
