import { Component, Input, OnInit } from '@angular/core';
import { TreeNode, TreeBranch, TreeLeaf } from '../../utils/containers/tree';
import { Feature } from '../../entities/feature';
import { traverseTree } from '../../utils/traverse-tree';

export interface FeatureGroupUIProps {
  name: string,
  selected: boolean,
  icon: string | null
}

export interface FeatureUIProps {
  name: string,
  selected: boolean,
  icon: string | null
}

type FeatureNode = TreeNode<FeatureGroupUIProps, FeatureUIProps>

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {
  constructor() { }

  @Input()
  public depth: number = 0

  public _tree: FeatureNode = new TreeBranch<FeatureGroupUIProps, FeatureUIProps>({ icon: null, name: '', selected: false })

  @Input()
  public set tree(tree: FeatureNode) {
    if (tree.isBranch()) {
      this.treeAsBranch = tree
      this.treeAsLeaf = null
    } else if (tree.isLeaf()) {
      this.treeAsLeaf = tree
      this.treeAsBranch = null
    }
    this._tree = tree
  }

  public treeAsBranch: TreeBranch<FeatureGroupUIProps, FeatureUIProps> | null

  public treeAsLeaf: TreeLeaf<FeatureGroupUIProps, FeatureUIProps> | null

  ngOnInit() {

  }

  public get partiallySelected() {
    if(this._tree.isBranch()) {
      let someChildrenAreSelected = false

      traverseTree(this._tree, node => someChildrenAreSelected = someChildrenAreSelected || node.content.selected)

      return someChildrenAreSelected
    }

    if (this._tree.isLeaf()) {
      return false
    }
  }

  public featureSelect(selected: boolean) {
    traverseTree(this._tree, child => {
      child.content.selected = selected
    })
  }
}
