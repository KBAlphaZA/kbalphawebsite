import { TestBed } from '@angular/core/testing';

import { CreatedprojectserviceService } from './createdprojectservice.service';

describe('CreatedprojectserviceService', () => {
  let service: CreatedprojectserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatedprojectserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
