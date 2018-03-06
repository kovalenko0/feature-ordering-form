import { TestBed, inject } from '@angular/core/testing';

import { ShopClientService } from './shop-client.service';

describe('ShopClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopClientService]
    });
  });

  it('should be created', inject([ShopClientService], (service: ShopClientService) => {
    expect(service).toBeTruthy();
  }));
});
