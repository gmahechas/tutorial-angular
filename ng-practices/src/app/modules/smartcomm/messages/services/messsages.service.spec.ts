import { TestBed } from '@angular/core/testing';

import { MesssagesService } from './messsages.service';

describe('MesssagesService', () => {
  let service: MesssagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesssagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
