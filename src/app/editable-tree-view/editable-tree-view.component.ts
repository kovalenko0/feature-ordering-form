import { Component, OnInit, Input } from '@angular/core'
import { FeaturesOrderStorage } from '../features-order-storage'
import { Feature, FeatureSet } from '../../entities/feature'
import { TreeNode, TreeBranch, TreeLeaf } from '../../utils/containers/tree'
import { FormEditorService, FormState, FeatureEditorState, FeatureSetEditorState } from '../feature-tree-editor-service'
import { throwOnNull } from '../../utils/misc-utils';

type FeatureNode = TreeNode<FeatureSet, Feature>

@Component({
  selector: 'app-editable-tree-view',
  templateUrl: './editable-tree-view.component.html',
  styleUrls: ['./editable-tree-view.component.css']
})
export class EditableTreeViewComponent {
  constructor(
    public editorService: FormEditorService
  ) {
    editorService.formState.subscribe(() => this.updateState())
    this.updateState()
  }

  private updateState() {
    const state = this.editorService.formState.get()

    this.rootNodeFlow = (
      this.tree != null &&
      this.depth === 0 &&
      this.tree.isBranch()
    )
      ? this.tree.content
      : null

    this.editFeatureFlow =
      (
        state.type === 'edit-feature' &&
        state.editorState.node === this.tree
      )
        ? { editorState: state.editorState }
        : null

    this.editFeatureSetFlow =
      (
        state.type === 'edit-feature-set' &&
        state.editorState.node === this.tree
      )
        ? { editorState: state.editorState }
        : null

    if (!this.editFeatureFlow && !this.editFeatureSetFlow) {
      this.featurePreviewFlow =
        (
          this.tree &&
          this.tree.isLeaf()
        )
          ? this.tree.content
          : null
          
      this.featureSetPreviewFlow =
        (
          this.tree &&
          this.tree.isBranch()
        )
          ? this.tree.content
          : null
    } else {
      this.featurePreviewFlow = null
      this.featureSetPreviewFlow = null
    }
  }

  @Input()
  public depth: number = 0

  @Input()
  public disabled: boolean = false

  private tree: FeatureNode | null = null

  @Input('tree')
  public set _tree(node: FeatureNode) {
    this.tree = node
    this.updateState()
  }

  public get children() {
    const tree = throwOnNull(this.tree)
    if (tree.isBranch()) {
      return tree.getChildren()
    } else {
      return []
    }
  }

  public rootNodeFlow:
    {
      name: string
    } | null
    = null

  public editFeatureFlow:
    {
      editorState: FeatureEditorState
    } | null
    = null

  public editFeatureSetFlow:
    {
      editorState: FeatureSetEditorState
    } | null
    = null

  public featurePreviewFlow:
    {
      name: string,
      price: number
    } | null
    = null
  
  public featureSetPreviewFlow:
    {
      name: string
    } | null
    = null

  public edit() {
    const tree = throwOnNull(this.tree)

    if (tree.isBranch()) {
      this.editorService.initiateFeatureSetEditing(tree)
    } else if (tree.isLeaf()) {
      this.editorService.initiateFeatureEditing(tree)      
    }
  }

  public delete() {
    this.editorService.delete(this.tree as any)
  }
}
