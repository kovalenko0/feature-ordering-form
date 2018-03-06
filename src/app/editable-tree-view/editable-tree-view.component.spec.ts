import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTreeViewComponent } from './editable-tree-view.component';

describe('EditableTreeViewComponent', () => {
  let component: EditableTreeViewComponent;
  let fixture: ComponentFixture<EditableTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditableTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
