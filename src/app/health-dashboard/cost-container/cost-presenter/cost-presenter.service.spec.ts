import { TestBed } from '@angular/core/testing';

import { CostPresenterService } from './cost-presenter.service';

describe('CostPresenterService', () => {
  let service: CostPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
