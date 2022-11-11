import { TestBed } from '@angular/core/testing';

import { LoginguardGuard } from './loginguard.guard';

describe('LoginguardGuard', () => {
  let guard: LoginguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
