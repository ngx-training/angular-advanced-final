import { TestBed, inject } from '@angular/core/testing';

import { HostElementService } from './host-element.service';

describe('HostElementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostElementService]
    });
  });

  it('should be created', inject([HostElementService], (service: HostElementService) => {
    expect(service).toBeTruthy();
  }));
});
