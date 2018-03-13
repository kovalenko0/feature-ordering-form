import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FeatureSetEditorState } from '../../feature-tree-editor-service';
import { throwOnNull } from '../../../utils/misc-utils';

@Component({
  selector: 'app-inline-feature-set-editor',
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
  styleUrls: ['./inline-feature-set-editor.component.css']
})
export class InlineFeatureSetEditorComponent {
  constructor() { }

  @Input()
  public editorState: FeatureSetEditorState | null = null

  @Output()
  public submit = new EventEmitter<FeatureSetEditorState>()

  @Output()
  public cancel = new EventEmitter<FeatureSetEditorState>()

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
