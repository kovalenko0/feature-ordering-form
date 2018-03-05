import { Feature, FeatureSet } from '../entities/feature'
import { traverseTree } from '../utils/traverse-tree'
import { TreeNode, TreeLeaf } from '../utils/containers/tree'
import { addIfMissing, remove, contains } from '../utils/array-utils'
import { Injectable } from '@angular/core';

export class FeaturesOrderStorage {
  constructor() {

  }

  private selectedFeatures: TreeLeaf<FeatureSet, Feature>[] = []

  public selectFeature(feature: TreeNode<FeatureSet, Feature>) {
    traverseTree(feature, childFeature => {
      if (childFeature.isLeaf()) {
        addIfMissing(this.selectedFeatures, childFeature)
      }
    })
  }

  public deselectFeature(feature: TreeNode<FeatureSet, Feature>) {
    traverseTree(feature, childFeature => {
      if (childFeature.isLeaf()) {
        remove(this.selectedFeatures, childFeature)
      }
    })
  }

  public getTotalPrice() {
    return this.selectedFeatures.reduce((total, feature) => total + feature.content.price, 0)
  }

  public getFeatureSelectionState(feature: TreeNode<FeatureSet, Feature>) {
    let allChildrenSelected = true
    let someChildrenSelected = false

    traverseTree(feature, childFeature => {
      if (childFeature.isLeaf()) {
        const childSelected = contains(this.selectedFeatures, childFeature)
        allChildrenSelected = allChildrenSelected && childSelected
        someChildrenSelected = someChildrenSelected || childSelected
      }
    })

    if (allChildrenSelected) {
      return 'selected'
    } else if (someChildrenSelected) {
      return 'partially-selected'
    } else {
      return 'not-selected'
    }
  }
}
