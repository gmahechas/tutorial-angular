import { TestBed } from '@angular/core/testing';

import { MesssagesStoreService } from './messsages-store.service';

describe('MesssagesStoreService', () => {
  let service: MesssagesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesssagesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
