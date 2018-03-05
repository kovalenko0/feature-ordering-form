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

  public _tree: FeatureNode

  @Input()
  public set tree(tree: FeatureNode) {
    if (!tree) {
      return
    }

    if (tree.isBranch()) {
      this.treeAsBranch = tree
      this.treeAsLeaf = null
    } else if (tree.isLeaf()) {
      this.treeAsLeaf = tree
      this.treeAsBranch = null
    }
    this._tree = tree
  }

  public treeAsBranch: TreeBranch<FeatureSet, Feature> | null

  public treeAsLeaf: TreeLeaf<FeatureSet, Feature> | null

  public get selected() {
    return this.orderFormStore.getFeatureSelectionState(this._tree) === 'selected'
  }

  public get partiallySelected() {
    return this.orderFormStore.getFeatureSelectionState(this._tree) === 'partially-selected'
  }

  public featureSelect(selected: boolean) {
    if (selected) {
      this.orderFormStore.selectFeature(this._tree)
    } else {
      this.orderFormStore.deselectFeature(this._tree)      
    }
  }
}
