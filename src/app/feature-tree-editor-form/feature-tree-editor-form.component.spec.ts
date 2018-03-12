import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTreeEditorFormComponent } from './feature-tree-editor-form.component';

describe('FeatureTreeEditorFormComponent', () => {
  let component: FeatureTreeEditorFormComponent;
  let fixture: ComponentFixture<FeatureTreeEditorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureTreeEditorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTreeEditorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
