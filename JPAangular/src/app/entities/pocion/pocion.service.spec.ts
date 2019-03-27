import { TestBed } from '@angular/core/testing';

import { PocionService } from './pocion.service';

describe('PocionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocionService = TestBed.get(PocionService);
    expect(service).toBeTruthy();
  });
});
