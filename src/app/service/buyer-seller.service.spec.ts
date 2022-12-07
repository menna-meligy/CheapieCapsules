import { TestBed } from '@angular/core/testing';

import { BuyerSellerService } from './buyer-seller.service';

describe('BuyerSellerService', () => {
  let service: BuyerSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
