import { TestBed } from '@angular/core/testing';

import { ReadJsonDataService } from './read-json-data.service';

describe('ReadJsonDataService', () => {
  let service: ReadJsonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadJsonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
