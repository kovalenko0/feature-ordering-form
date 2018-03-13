import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeatureEditorState } from '../../feature-tree-editor-service';
import { throwOnNull } from '../../../utils/misc-utils';

@Component({
  selector: 'app-inline-feature-editor',
  template: `
    <form
      (submit)="
        $event.preventDefault();
        $event.stopPropagation();
        handleSubmit()
      ">
      <input
        [value]="state.name"
        (change)="state.name = $event.target.value"
        placeholder="Name"
        />
      <app-numeric-input
        [value]="state.price"
        (valueInput)="state.price = $event"
        placeholder="Price"
        >
      </app-numeric-input>
      <div>
        <input
          type="button"
          value="Cancel"
          (click)="handleCancel()"
          />
        <input
          type="submit"
          value="Save"
          />
      </div>
    </form>
  `,
  styleUrls: ['./inline-feature-editor.component.css']
})
export class InlineFeatureEditorComponent {
  constructor() { }

  @Input()
  public editorState: FeatureEditorState | null = null

  @Output()
  public submit = new EventEmitter<FeatureEditorState>()

  @Output()
  public cancel = new EventEmitter<FeatureEditorState>()

  public handleSubmit() {
    const validationResults = this.state.getValidityState()
    if (validationResults.valid) {
      this.submit.next(this.state)
    }
  }

  public handleCancel() {
    this.cancel.next(this.editorState || undefined)
  }

  public get state() {
    return throwOnNull(this.editorState)
  }
}
