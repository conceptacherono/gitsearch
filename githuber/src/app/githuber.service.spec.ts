import { TestBed } from '@angular/core/testing';

import { GithuberService } from './githuber.service';

describe('GithuberService', () => {
  let service: GithuberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithuberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
