import { Component, OnInit, Input } from '@angular/core';
import { FeaturesOrderStorage } from '../features-order-storage'
import { Feature, FeatureSet } from '../../entities/feature'
import { TreeNode, TreeBranch, TreeLeaf } from '../../utils/containers/tree'

type FeatureNode = TreeNode<FeatureSet, Feature>

@Component({
  selector: 'app-editable-tree-view',
  templateUrl: './editable-tree-view.component.html',
  styleUrls: ['./editable-tree-view.component.css']
})
export class EditableTreeViewComponent {
  constructor() { }

  @Input()
  public orderFormStore: FeaturesOrderStorage

  @Input()
  public depth: number = 0

  @Input()
  public disabled: boolean = false

  @Input()
  public tree: FeatureNode

  public get children() {
    if (this.tree.isBranch()) {
      return this.tree.getChildren()
    } else {
      return []
    }
  }

  public get label() {
    return (
      this.tree.content.name +
      (
        this.tree.isBranch()
          ? ':'
          : ''
      ) +
      (
        this.tree.isLeaf()
          ? '$' + this.tree.content.price.toFixed(2)
          : ''
      )
    )
  }
}
