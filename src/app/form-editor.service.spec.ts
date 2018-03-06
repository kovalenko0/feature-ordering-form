import { TestBed, inject } from '@angular/core/testing';

import { FormEditorService } from './form-editor.service';

describe('FormEditorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormEditorService]
    });
  });

  it('should be created', inject([FormEditorService], (service: FormEditorService) => {
    expect(service).toBeTruthy();
  }));
});
