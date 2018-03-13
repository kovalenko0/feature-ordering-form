import { Component, OnInit, Input } from '@angular/core'
import { FormEditorService } from '../feature-tree-editor-service'
import { TreeNode } from '../../utils/containers/tree'
import { FeatureSet, Feature } from '../../entities/feature'

@Component({
  selector: 'app-feature-tree-editor-form',
  template: `
    <h2>Feature set editor</h2>
    <app-editable-tree-view
      [tree]=features
      >
    </app-editable-tree-view>
  `
})
export class FeatureTreeEditorFormComponent {
  constructor() { }

  @Input()
  public editorService: FormEditorService

  @Input()
  public features: TreeNode<FeatureSet, Feature>
}
