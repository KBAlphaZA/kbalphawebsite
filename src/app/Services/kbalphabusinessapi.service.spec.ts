import { TestBed } from '@angular/core/testing';

import { KbalphabusinessapiService } from './kbalphabusinessapi.service';

describe('KbalphabusinessapiService', () => {
  let service: KbalphabusinessapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KbalphabusinessapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
