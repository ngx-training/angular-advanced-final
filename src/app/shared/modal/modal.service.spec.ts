import { TestBed, inject } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { HostElementService } from './host/host-element.service';

describe('ModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalService, HostElementService]
    });
  });

  it('should be created', inject([ModalService], (service: ModalService) => {
    expect(service).toBeTruthy();
  }));
});
