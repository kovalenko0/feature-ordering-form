import { TestBed, inject } from '@angular/core/testing';

import { FeaturesStorageService } from './features-storage.service';

describe('FeaturesStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturesStorageService]
    });
  });

  it('should be created', inject([FeaturesStorageService], (service: FeaturesStorageService) => {
    expect(service).toBeTruthy();
  }));
});
