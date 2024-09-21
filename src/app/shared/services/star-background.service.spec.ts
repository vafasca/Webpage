import { TestBed } from '@angular/core/testing';

import { StarBackgroundService } from './star-background.service';

describe('StarBackgroundService', () => {
  let service: StarBackgroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarBackgroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
