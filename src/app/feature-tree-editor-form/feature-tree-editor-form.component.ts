import { Component, OnInit, Input } from '@angular/core'
import { FormEditorService } from '../feature-tree-editor-service'
import { TreeNode } from '../../utils/containers/tree';
import { FeatureSet, Feature } from '../../entities/feature';

@Component({
  selector: 'app-feature-tree-editor-form',
  templateUrl: './feature-tree-editor-form.component.html',
  styleUrls: ['./feature-tree-editor-form.component.css']
})
export class FeatureTreeEditorFormComponent {
  constructor() { }

  @Input()
  public editorService: FormEditorService

  @Input()
  public features: TreeNode<FeatureSet, Feature>
}
