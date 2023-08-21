import { TestBed } from '@angular/core/testing';

import { TaskdatastorageService } from './taskdatastorage.service';

describe('TaskdatastorageService', () => {
  let service: TaskdatastorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskdatastorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
