import { TestBed, inject } from '@angular/core/testing';

import { FeaturesOrderStorageService } from './features-order-storage.service';

describe('FeaturesOrderStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturesOrderStorageService]
    });
  });

  it('should be created', inject([FeaturesOrderStorageService], (service: FeaturesOrderStorageService) => {
    expect(service).toBeTruthy();
  }));
});
