import { Component, Input, OnInit } from '@angular/core';
import { TreeNode, TreeBranch, TreeLeaf } from '../../utils/containers/tree';
import { Feature, FeatureSet } from '../../entities/feature';
import { traverseTree } from '../../utils/traverse-tree';
import { FeaturesOrderStorage } from '../features-order-storage';

type FeatureNode = TreeNode<FeatureSet, Feature>

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
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
  public get selected() {
    return this.orderFormStore.getFeatureSelectionState(this.tree) === 'selected'
  }

  public get partiallySelected() {
    return this.orderFormStore.getFeatureSelectionState(this.tree) === 'partially-selected'
  }

  public featureSelect(selected: boolean) {
    if (selected) {
      this.orderFormStore.selectFeature(this.tree)
    } else {
      this.orderFormStore.deselectFeature(this.tree)      
    }
  }
}
